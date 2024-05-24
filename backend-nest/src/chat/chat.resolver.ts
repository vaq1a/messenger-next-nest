import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ChatService } from './chat.service';
import { GraphQLErrorFilter } from 'src/filters/custom-exception.filter';
import { UseFilters, UseGuards } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserResponse } from '../user/models/user-response.model';
import { Message } from '../shared/prismagraphql/message';
import { Chat } from '../shared/prismagraphql/chat';
import { CurrentUser } from '../user/decorators/current-user.decorator';
import { User } from '../shared/prismagraphql/user';

@Resolver()
export class ChatResolver {
  public pubSub: PubSub;
  constructor(private readonly chatService: ChatService) {
    this.pubSub = new PubSub();
  }

  @Subscription(() => Message, {
    nullable: true,
    resolve: (value) => value.newMessage,
  })
  newMessage(@Args('chatId') chatId: string) {
    return this.pubSub.asyncIterator(`newMessage.${chatId}`);
  }

  @Subscription(() => UserResponse, {
    nullable: true,
    resolve: (value) => value.user,
    filter: (payload, variables) => {
      console.log('payload1', variables, payload.typingUserId);
      return variables.userId !== payload.typingUserId;
    },
  })
  userStartedTyping(
    @Args('chatId') chatId: string,
    @Args('userId') userId: string,
  ) {
    return this.pubSub.asyncIterator(`userStartedTyping.${chatId}`);
  }

  @Subscription(() => UserResponse, {
    nullable: true,
    resolve: (value) => value.user,
    filter: (payload, variables) => {
      return variables.userId !== payload.typingUserId;
    },
  })
  userStoppedTyping(
    @Args('chatId') chatId: string,
    @Args('userId') userId: string,
  ) {
    return this.pubSub.asyncIterator(`userStoppedTyping.${chatId}`);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(JwtAuthGuard)
  @Mutation(() => UserResponse)
  async userStartedTypingMutation(
    @Args('chatId') chatId: string,
    @CurrentUser() user: User,
  ) {
    await this.pubSub.publish(`userStartedTyping.${chatId}`, {
      user,
      typingUserId: user.id,
    });
    return user;
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(JwtAuthGuard)
  @Mutation(() => UserResponse, {})
  async userStoppedTypingMutation(
    @Args('chatId') chatId: string,
    @CurrentUser() user: User,
  ) {
    await this.pubSub.publish(`userStoppedTyping.${chatId}`, {
      user,
      typingUserId: user.id,
    });

    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Message)
  async sendMessage(
    @Args('chatId') chatId: string,
    @Args('content') content: string,
    @CurrentUser() user: User,
  ) {
    const newMessage = await this.chatService.sendMessage(
      chatId,
      content,
      user.id,
    );

    await this.pubSub
      .publish(`newMessage.${chatId}`, { newMessage })
      .then((res) => {
        console.log('published', res);
      })
      .catch((err) => {
        console.log('err', err);
      });

    return newMessage;
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(JwtAuthGuard)
  @Mutation(() => Chat)
  async createChat(
    @Args('chatName') chatName: string,
    @Args('companionUserId') companionUserId: string,
    @CurrentUser() user: User,
  ) {
    return this.chatService.createChat(chatName, companionUserId, user);
  }

  @Mutation(() => Chat)
  async addUsersToChat(
    @Args('chatId') chatId: string,
    @Args('userIds', { type: () => [String] }) userIds: string[],
  ) {
    return this.chatService.addUsersToChat(chatId, userIds);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Chat])
  async getChatsForUser(@CurrentUser() user: User) {
    return this.chatService.getChatsForUser(user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Chat)
  async getChat(@Args('chatId') chatId: string, @CurrentUser() user: User) {
    return this.chatService.getChat(chatId, user);
  }

  @Query(() => [Message])
  async getMessagesForChat(@Args('chatId') chatId: string) {
    return this.chatService.getMessagesForChat(chatId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => String)
  async deleteChat(@Args('chatId') chatId: string) {
    await this.chatService.deleteChat(chatId);
    return 'Chat deleted successfully';
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Boolean)
  async exiteFromChat(
    @Args('chatId') chatId: string,
    @CurrentUser() user: User,
  ) {
    await this.chatService.exiteFromChat(chatId, user);
  }
}
