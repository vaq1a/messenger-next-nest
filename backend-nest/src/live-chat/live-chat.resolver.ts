import { Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Subscription, Args, Mutation } from '@nestjs/graphql';
import { UseFilters, UseGuards } from '@nestjs/common';
import { GraphQLErrorFilter } from 'src/filters/custom-exception.filter';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LiveChatService } from './live-chat.service';
import { User } from '../shared/prismagraphql/user';
import { CurrentUser } from '../user/decorators/current-user.decorator';

@Resolver()
export class LiveChatResolver {
  private pubSub: PubSub;
  constructor(private readonly liveChatService: LiveChatService) {
    this.pubSub = new PubSub();
  }

  @Subscription(() => [User], {
    nullable: true,
    resolve: (value) => value.liveUsers,
    filter: (payload, variables) => {
      return payload.chatId === variables.chatId;
    },
  })
  liveUsersInChat(@Args('chatId') chatId: string) {
    return this.pubSub.asyncIterator(`liveUsersInChat.${chatId}`);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async enterChat(@Args('chatId') chatId: string, @CurrentUser() user: User) {
    await this.liveChatService.addLiveUserToChat(chatId, user);

    const liveUsers = await this.liveChatService
      .getLiveUsersForChat(chatId)
      .catch((err) => {
        console.log('getLiveUsersForChat error', err);
      });

    await this.pubSub
      .publish(`liveUsersInChat.${chatId}`, {
        liveUsers,
        chatId,
      })
      .catch((err) => {
        console.log('pubSub error', err);
      });
    return true;
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async leaveChat(@Args('chatId') chatId: string, @CurrentUser() user: User) {
    await this.liveChatService.removeLiveUserFromChat(chatId, user);

    const liveUsers = await this.liveChatService.getLiveUsersForChat(chatId);

    await this.pubSub.publish(`liveUsersInChat.${chatId}`, {
      liveUsers,
      chatId,
    });

    return true;
  }
}
