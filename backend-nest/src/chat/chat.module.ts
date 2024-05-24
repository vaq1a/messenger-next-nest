import { Module } from '@nestjs/common';
import { ChatResolver } from './chat.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { ChatService } from './chat.service';

@Module({
  imports: [PrismaModule],
  providers: [ChatService, ChatResolver],
})
export class ChatModule {}
