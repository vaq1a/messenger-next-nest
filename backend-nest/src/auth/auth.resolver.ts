import {
  Resolver,
  Args,
  Mutation,
  Context,
  Query,
  InputType,
  Field,
} from '@nestjs/graphql';
import { CreateOneUserArgs } from '../shared/prismagraphql/user';
import { AuthService } from './auth.service';
import { SignInArgs } from './args/sign-in.args';
import { AccessTokenModel } from './models/access-token.model';
import { UserResponse } from '../user/models/user-response.model';
import { PingResponse } from '../user/models/ping-response.model';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UseFilters, UseGuards } from '@nestjs/common';
import { GraphQLErrorFilter } from '../filters/custom-exception.filter';

@UseFilters(GraphQLErrorFilter)
@Resolver(() => UserResponse)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AccessTokenModel, { nullable: false })
  async signIn(@Args() args: SignInArgs, @Context('res') res: Response) {
    return await this.authService.signIn(args, res);
  }

  @Mutation(() => UserResponse, { nullable: false })
  async signUp(@Args() args: CreateOneUserArgs) {
    return await this.authService.signUp(args);
  }

  @Mutation(() => AccessTokenModel, { nullable: false })
  async getNewTokens(@Context() { req, res }: { req: Request; res: Response }) {
    return await this.authService.updateRefreshToken(req, res);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => PingResponse, { nullable: false })
  async ping() {
    return await this.authService.ping();
  }
}
