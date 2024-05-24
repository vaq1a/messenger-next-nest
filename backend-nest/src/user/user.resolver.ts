import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../shared/prismagraphql/user';
import { UserResponse } from './models/user-response.model';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';

@Resolver(() => UserResponse)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => UserResponse, { nullable: false })
  getUser(@CurrentUser() user: User) {
    return this.userService.getUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [UserResponse], { nullable: false })
  getAllUsers(@CurrentUser() user: User) {
    return this.userService.getAllUsers(user);
  }
}
