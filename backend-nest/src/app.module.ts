import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import process from 'process';
import { IS_DEVELOPMENT } from './config/config';
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';
import { ChatModule } from './chat/chat.module';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { JwtService } from '@nestjs/jwt';
import { LiveChatModule } from './live-chat/live-chat.module';

const pubSub = new RedisPubSub({
  connection: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    retryStrategy: (times) => {
      return Math.min(times * 50, 2000);
    },
  },
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule, AppModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: async (
        configService: ConfigService,
        jwtService: JwtService,
      ) => {
        return {
          cors: {
            origin: 'http://localhost:3000',
            credentials: true,
          },
          upload: false,
          include: [
            UserModule,
            AuthModule,
            FileModule,
            ChatModule,
            LiveChatModule,
          ],
          installSubscriptionHandlers: true,
          playground: IS_DEVELOPMENT,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          sortSchema: true,
          subscriptions: {
            'graphql-ws': true,
            'subscriptions-transport-ws': true,
          },
          onConnect: (connectionParams) => {
            const token = connectionParams?.token || null;

            if (!token) {
              throw new Error('Token not provided');
            }

            const user = jwtService.verifyAsync(token);

            if (!user) {
              throw new Error('Invalid token');
            }

            return { user };
          },
          context: ({ req, res, connection }) => {
            if (connection) {
              return { req, res, user: connection.context.user, pubSub };
            }
            return { req, res };
          },
        };
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: `${path}/uploads`,
      serveRoot: '/uploads',
    }),
    PrismaModule,
    UserModule,
    AuthModule,
    FileModule,
    ChatModule,
    LiveChatModule,
  ],
  providers: [AppService],
})
export class AppModule {}
