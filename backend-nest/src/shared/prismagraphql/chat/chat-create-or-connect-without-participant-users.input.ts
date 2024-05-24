import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutParticipantUsersInput } from './chat-create-without-participant-users.input';

@InputType()
export class ChatCreateOrConnectWithoutParticipantUsersInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatCreateWithoutParticipantUsersInput, {nullable:false})
    @Type(() => ChatCreateWithoutParticipantUsersInput)
    create!: ChatCreateWithoutParticipantUsersInput;
}
