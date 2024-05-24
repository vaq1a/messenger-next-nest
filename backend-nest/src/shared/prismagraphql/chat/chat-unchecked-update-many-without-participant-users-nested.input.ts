import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutParticipantUsersInput } from './chat-create-without-participant-users.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutParticipantUsersInput } from './chat-create-or-connect-without-participant-users.input';
import { ChatUpsertWithWhereUniqueWithoutParticipantUsersInput } from './chat-upsert-with-where-unique-without-participant-users.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { ChatUpdateWithWhereUniqueWithoutParticipantUsersInput } from './chat-update-with-where-unique-without-participant-users.input';
import { ChatUpdateManyWithWhereWithoutParticipantUsersInput } from './chat-update-many-with-where-without-participant-users.input';
import { ChatScalarWhereInput } from './chat-scalar-where.input';

@InputType()
export class ChatUncheckedUpdateManyWithoutParticipantUsersNestedInput {

    @Field(() => [ChatCreateWithoutParticipantUsersInput], {nullable:true})
    @Type(() => ChatCreateWithoutParticipantUsersInput)
    create?: Array<ChatCreateWithoutParticipantUsersInput>;

    @Field(() => [ChatCreateOrConnectWithoutParticipantUsersInput], {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutParticipantUsersInput)
    connectOrCreate?: Array<ChatCreateOrConnectWithoutParticipantUsersInput>;

    @Field(() => [ChatUpsertWithWhereUniqueWithoutParticipantUsersInput], {nullable:true})
    @Type(() => ChatUpsertWithWhereUniqueWithoutParticipantUsersInput)
    upsert?: Array<ChatUpsertWithWhereUniqueWithoutParticipantUsersInput>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatUpdateWithWhereUniqueWithoutParticipantUsersInput], {nullable:true})
    @Type(() => ChatUpdateWithWhereUniqueWithoutParticipantUsersInput)
    update?: Array<ChatUpdateWithWhereUniqueWithoutParticipantUsersInput>;

    @Field(() => [ChatUpdateManyWithWhereWithoutParticipantUsersInput], {nullable:true})
    @Type(() => ChatUpdateManyWithWhereWithoutParticipantUsersInput)
    updateMany?: Array<ChatUpdateManyWithWhereWithoutParticipantUsersInput>;

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    @Type(() => ChatScalarWhereInput)
    deleteMany?: Array<ChatScalarWhereInput>;
}
