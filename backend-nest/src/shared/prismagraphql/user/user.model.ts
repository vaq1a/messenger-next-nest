import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { Tokens } from '../tokens/tokens.model';
import { Chat } from '../chat/chat.model';
import { Message } from '../message/message.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    password!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Tokens, {nullable:true})
    tokens?: Tokens | null;

    @Field(() => [Chat], {nullable:true})
    createdChats?: Array<Chat>;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => [Chat], {nullable:true})
    participantChats?: Array<Chat>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
