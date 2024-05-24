import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatCreateWithoutAuthorInput } from './chat-create-without-author.input';

@InputType()
export class ChatCreateOrConnectWithoutAuthorInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatCreateWithoutAuthorInput, {nullable:false})
    @Type(() => ChatCreateWithoutAuthorInput)
    create!: ChatCreateWithoutAuthorInput;
}
