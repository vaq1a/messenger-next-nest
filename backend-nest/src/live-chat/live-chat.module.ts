import { Module } from '@nestjs/common';
import { LiveChatResolver } from './live-chat.resolver';
import { LiveChatService } from './live-chat.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LiveChatResolver, LiveChatService],
})
export class LiveChatModule {}
