import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutAuthorInput } from './chat-create-without-author.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutAuthorInput } from './chat-create-or-connect-without-author.input';
import { ChatCreateManyAuthorInputEnvelope } from './chat-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';

@InputType()
export class ChatCreateNestedManyWithoutAuthorInput {

    @Field(() => [ChatCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ChatCreateWithoutAuthorInput)
    create?: Array<ChatCreateWithoutAuthorInput>;

    @Field(() => [ChatCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ChatCreateOrConnectWithoutAuthorInput>;

    @Field(() => ChatCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ChatCreateManyAuthorInputEnvelope)
    createMany?: ChatCreateManyAuthorInputEnvelope;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;
}
