import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCreatedChatsInput } from './user-create-without-created-chats.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCreatedChatsInput } from './user-create-or-connect-without-created-chats.input';
import { UserUpsertWithoutCreatedChatsInput } from './user-upsert-without-created-chats.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCreatedChatsInput } from './user-update-to-one-with-where-without-created-chats.input';

@InputType()
export class UserUpdateOneRequiredWithoutCreatedChatsNestedInput {

    @Field(() => UserCreateWithoutCreatedChatsInput, {nullable:true})
    @Type(() => UserCreateWithoutCreatedChatsInput)
    create?: UserCreateWithoutCreatedChatsInput;

    @Field(() => UserCreateOrConnectWithoutCreatedChatsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCreatedChatsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCreatedChatsInput;

    @Field(() => UserUpsertWithoutCreatedChatsInput, {nullable:true})
    @Type(() => UserUpsertWithoutCreatedChatsInput)
    upsert?: UserUpsertWithoutCreatedChatsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutCreatedChatsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCreatedChatsInput)
    update?: UserUpdateToOneWithWhereWithoutCreatedChatsInput;
}
