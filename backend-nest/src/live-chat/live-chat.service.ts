import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { User } from '../shared/prismagraphql/user';

@Injectable()
export class LiveChatService {
  private redisClient: Redis;

  constructor() {
    this.redisClient = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379', 10),
    });
  }

  async addLiveUserToChat(chatId: string, user: User): Promise<void> {
    const existingLiveUsers = await this.getLiveUsersForChat(chatId);

    const existingUser = existingLiveUsers.find(
      (liveUser) => liveUser.id === user.id,
    );
    if (existingUser) {
      return;
    }
    await this.redisClient.sadd(
      `liveUsers:chat:${chatId}`,
      JSON.stringify(user),
    );
  }

  async removeLiveUserFromChat(chatId: string, user: User): Promise<void> {
    await this.redisClient
      .srem(`liveUsers:chat:${chatId}`, JSON.stringify(user))
      .catch((err) => {
        console.log('removeLiveUserFromChat error', err);
      })
      .then((res) => {
        console.log('removeLiveUserFromChat res', res);
      });
  }

  async getLiveUsersForChat(chatId: string): Promise<User[]> {
    const users = await this.redisClient.smembers(`liveUsers:chat:${chatId}`);

    return users.map((user) => JSON.parse(user));
  }
}
