import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCreatedChatsInput } from './user-update-without-created-chats.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCreatedChatsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCreatedChatsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCreatedChatsInput)
    data!: UserUpdateWithoutCreatedChatsInput;
}
