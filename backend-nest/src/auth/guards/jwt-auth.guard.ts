import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt1') {
  getRequest(context: ExecutionContext) {
    const type = context.getType<GqlContextType>();

    switch (type) {
      case 'graphql':
        const ctx = GqlExecutionContext.create(context);
        const { req } = ctx.getContext();

        return req;
      default:
        return context.switchToHttp().getRequest();
    }
  }
}
