import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatUpdateWithoutParticipantUsersInput } from './chat-update-without-participant-users.input';

@InputType()
export class ChatUpdateWithWhereUniqueWithoutParticipantUsersInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatUpdateWithoutParticipantUsersInput, {nullable:false})
    @Type(() => ChatUpdateWithoutParticipantUsersInput)
    data!: ChatUpdateWithoutParticipantUsersInput;
}
