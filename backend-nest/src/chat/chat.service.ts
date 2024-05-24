import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createWriteStream } from 'fs';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../shared/prismagraphql/user';

@Injectable()
export class ChatService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async getChat(chatId: string, user: User) {
    return this.prisma.chat.findUnique({
      where: {
        id: chatId,
      },
      include: {
        author: true,
        messages: true,
        participantUsers: {
          where: {
            NOT: {
              id: {
                equals: user.id,
              },
            },
          },
        },
      },
    });
  }

  async createChat(name, companionUserId, user) {
    const existingChat = await this.prisma.chat.findFirst({
      where: {
        name,
      },
    });

    if (existingChat) {
      throw new BadRequestException({ name: 'Chat already exists' });
    }

    return this.prisma.chat.create({
      data: {
        name,
        participantUsers: {
          connect: [user.id, companionUserId].map((id) => ({ id })),
        },
        author: {
          connect: {
            id: user.id,
          },
        },
      },
      include: {
        author: true,
        messages: true,
        participantUsers: true,
      },
    });
  }

  async addUsersToChat(chatId: string, userIds: string[]) {
    const existingChat = await this.prisma.chat.findUnique({
      where: {
        id: chatId,
      },
    });

    if (!existingChat) {
      throw new BadRequestException({ chatId: 'Chat does not exist' });
    }

    return await this.prisma.chat.update({
      where: {
        id: chatId,
      },
      data: {
        participantUsers: {
          connect: userIds.map((id) => ({ id })),
        },
      },
      include: {
        author: true,
        messages: true,
        participantUsers: true,
      },
    });
  }

  async getChatsForUser(userId: string) {
    return this.prisma.chat.findMany({
      where: {
        participantUsers: {
          some: {
            id: userId,
          },
        },
      },
      include: {
        author: true,
        participantUsers: {
          orderBy: {
            createdAt: 'desc',
          },
        },
        messages: {
          take: 1,
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });
  }

  async sendMessage(chatId: string, message: string, userId: string) {
    return await this.prisma.message.create({
      data: {
        text: message,
        chatId,
        authorId: userId,
      },
      include: {
        chat: {
          include: {
            participantUsers: true,
          },
        },
        author: true,
      },
    });
  }

  // async saveImage(image: {
  //   createReadStream: () => any;
  //   filename: string;
  //   mimetype: string;
  // }) {
  //   const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
  //   if (!validImageTypes.includes(image.mimetype)) {
  //     throw new BadRequestException({ image: 'Invalid image type' });
  //   }
  //
  //   const imageName = `${Date.now()}-${image.filename}`;
  //   const imagePath = `${this.configService.get('IMAGE_PATH')}/${imageName}`;
  //   const stream = image.createReadStream();
  //   const outputPath = `public${imagePath}`;
  //   const writeStream = createWriteStream(outputPath);
  //   stream.pipe(writeStream);
  //
  //   await new Promise((resolve, reject) => {
  //     stream.on('end', resolve);
  //     stream.on('error', reject);
  //   });
  //
  //   return imagePath;
  // }

  async getMessagesForChat(chatId: string) {
    return await this.prisma.message.findMany({
      where: {
        chatId,
      },
      include: {
        chat: {
          include: {
            participantUsers: {
              orderBy: {
                createdAt: 'asc',
              },
            },
          },
        },
        author: true,
      },
    });
  }

  async deleteChat(chatId) {
    return this.prisma.chat.delete({
      where: {
        id: chatId,
      },
    });
  }

  async exiteFromChat(chatId, user) {
    await this.prisma.chat.update({
      where: {
        id: chatId,
      },
      data: {
        participantUsers: {
          disconnect: {
            id: user.id,
          },
        },
      },
      include: {
        author: true,
        messages: true,
        participantUsers: true,
      },
    });

    return true;
  }
}
