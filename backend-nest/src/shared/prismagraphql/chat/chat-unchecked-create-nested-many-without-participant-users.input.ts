import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutParticipantUsersInput } from './chat-create-without-participant-users.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutParticipantUsersInput } from './chat-create-or-connect-without-participant-users.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@InputType()
export class ChatUncheckedCreateNestedManyWithoutParticipantUsersInput {

    @Field(() => [ChatCreateWithoutParticipantUsersInput], {nullable:true})
    @Type(() => ChatCreateWithoutParticipantUsersInput)
    create?: Array<ChatCreateWithoutParticipantUsersInput>;

    @Field(() => [ChatCreateOrConnectWithoutParticipantUsersInput], {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutParticipantUsersInput)
    connectOrCreate?: Array<ChatCreateOrConnectWithoutParticipantUsersInput>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;
}
