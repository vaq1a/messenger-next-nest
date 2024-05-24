import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutParticipantChatsInput } from './user-create-without-participant-chats.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutParticipantChatsInput } from './user-create-or-connect-without-participant-chats.input';
import { UserUpsertWithWhereUniqueWithoutParticipantChatsInput } from './user-upsert-with-where-unique-without-participant-chats.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutParticipantChatsInput } from './user-update-with-where-unique-without-participant-chats.input';
import { UserUpdateManyWithWhereWithoutParticipantChatsInput } from './user-update-many-with-where-without-participant-chats.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutParticipantChatsNestedInput {

    @Field(() => [UserCreateWithoutParticipantChatsInput], {nullable:true})
    @Type(() => UserCreateWithoutParticipantChatsInput)
    create?: Array<UserCreateWithoutParticipantChatsInput>;

    @Field(() => [UserCreateOrConnectWithoutParticipantChatsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutParticipantChatsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutParticipantChatsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutParticipantChatsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutParticipantChatsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutParticipantChatsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutParticipantChatsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutParticipantChatsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutParticipantChatsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutParticipantChatsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutParticipantChatsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutParticipantChatsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
