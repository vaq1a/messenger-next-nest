import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { Type } from 'class-transformer';
import { ChatUpdateWithoutAuthorInput } from './chat-update-without-author.input';

@InputType()
export class ChatUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => ChatWhereUniqueInput, {nullable:false})
    @Type(() => ChatWhereUniqueInput)
    where!: Prisma.AtLeast<ChatWhereUniqueInput, 'id'>;

    @Field(() => ChatUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => ChatUpdateWithoutAuthorInput)
    data!: ChatUpdateWithoutAuthorInput;
}
