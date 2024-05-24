import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

interface IValidateData {
  email: string;
  iat: string;
  exp: string;
}

/**
 * Extracts the jwt from a cookie
 * @param req Http Request
 */
const cookieExtractor = (req) => {
  let token = null;

  if (req && req.cookies) {
    token = req.cookies.at;
  }

  return token;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt1') {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: IValidateData) {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        email: payload?.email,
      },
    });

    if (!foundUser) {
      throw new UnauthorizedException('User not found');
    }

    return foundUser;
  }
}
