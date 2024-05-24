import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SignInInput } from './args/sign-in.input';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import bcrypt from 'bcryptjs';
import process from 'process';

type TokensPair = {
  refreshToken: string;
  accessToken: string;
};

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signIn(params: { data?: SignInInput }, res: any) {
    const { data } = params;

    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new NotFoundException('Data is invalid');
    }

    const isValidPassword = bcrypt.compareSync(
      data.password,
      user.password,
      function (err, res) {
        if (err) {
          throw new Error(err);
        }

        return res;
      },
    );

    if (!isValidPassword) {
      throw new NotFoundException('Password is invalid');
    }

    const { refreshToken, accessToken }: TokensPair =
      await this.createTokensPair(data.email);

    const foundTokens = await this.prisma.tokens.findFirst({
      where: {
        userId: user.id,
      },
    });

    if (!foundTokens) {
      await this.prisma.tokens.create({
        data: {
          refreshToken,
          accessToken,
          userId: user.id,
        },
      });
    } else {
      await this.prisma.tokens.update({
        where: {
          id: foundTokens.id,
        },
        data: {
          ...foundTokens,
          refreshToken,
          accessToken,
        },
      });
    }

    const refreshTokenExpires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    res.cookie('rt', refreshToken, {
      httpOnly: true,
      path: '/',
      secure: false,
      domain: 'localhost',
      expires: refreshTokenExpires,
    });

    return {
      accessToken,
    };
  }

  async signUp(params: { data?: Prisma.UserCreateInput }) {
    const { data } = params;

    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (user) {
      throw new NotAcceptableException('Mail is busy');
    }

    const passwordWithHash = bcrypt.hashSync(
      data.password,
      Number(process.env.ROUNDS),
      (err, hash) => {
        if (err) {
          throw new Error(err);
        }

        return hash;
      },
    );

    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: passwordWithHash,
      },
    });
  }

  async createTokensPair(email: string): Promise<TokensPair> {
    const data = { email };

    const refreshToken = await this.jwtService.signAsync(data, {
      secret: process.env.JWT_SECRET,
      expiresIn: '10d',
    });

    const accessToken = await this.jwtService.signAsync(data, {
      secret: process.env.JWT_SECRET,
      expiresIn: '1h',
    });

    return {
      refreshToken,
      accessToken,
    };
  }

  async updateRefreshToken(req: any, res: any) {
    const oldRefreshToken = req.cookies['rt'];

    if (!oldRefreshToken) {
      throw new Error('Refresh token is expired');
    }

    const { email } = await this.jwtService.verifyAsync(oldRefreshToken);

    const { refreshToken: newRefreshToken, accessToken: newAccessToken } =
      await this.createTokensPair(email);

    await this.prisma.tokens.update({
      where: {
        refreshToken: oldRefreshToken,
      },
      data: {
        refreshToken: newRefreshToken,
        accessToken: newAccessToken,
      },
    });

    const refreshTokenExpires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    res.cookie('rt', newRefreshToken, {
      httpOnly: true,
      path: '/',
      secure: false,
      domain: 'localhost',
      expires: refreshTokenExpires,
    });

    return {
      accessToken: newAccessToken,
    };
  }

  async ping() {
    return {
      name: 'Vaq1a',
    };
  }
}
