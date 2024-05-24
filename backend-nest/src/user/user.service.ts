import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUser(user: User): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });
  }

  async getAllUsers(user: User): Promise<User[]> {
    // const [result1, result2] = await this.prisma.$transaction([
    //   this.prisma.user.findMany(),
    //   this.prisma.user.findMany(),
    // ]);
    // return result1;

    return await this.prisma.user.findMany({
      where: {
        id: {
          not: user.id,
        },
      },
    });
  }
}
