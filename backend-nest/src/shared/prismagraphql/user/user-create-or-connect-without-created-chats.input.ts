import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCreatedChatsInput } from './user-create-without-created-chats.input';

@InputType()
export class UserCreateOrConnectWithoutCreatedChatsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutCreatedChatsInput, {nullable:false})
    @Type(() => UserCreateWithoutCreatedChatsInput)
    create!: UserCreateWithoutCreatedChatsInput;
}
