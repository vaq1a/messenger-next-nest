import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Message } from '../message/message.model';
import { ChatCount } from './chat-count.output';

@ObjectType()
export class Chat {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => [User], {nullable:true})
    participantUsers?: Array<User>;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => ChatCount, {nullable:false})
    _count?: ChatCount;
}
