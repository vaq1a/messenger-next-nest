import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCreatedChatsInput } from './user-update-without-created-chats.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCreatedChatsInput } from './user-create-without-created-chats.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCreatedChatsInput {

    @Field(() => UserUpdateWithoutCreatedChatsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCreatedChatsInput)
    update!: UserUpdateWithoutCreatedChatsInput;

    @Field(() => UserCreateWithoutCreatedChatsInput, {nullable:false})
    @Type(() => UserCreateWithoutCreatedChatsInput)
    create!: UserCreateWithoutCreatedChatsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
