import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateWithoutAuthorInput } from './chat-create-without-author.input';
import { Type } from 'class-transformer';
import { ChatCreateOrConnectWithoutAuthorInput } from './chat-create-or-connect-without-author.input';
import { ChatUpsertWithWhereUniqueWithoutAuthorInput } from './chat-upsert-with-where-unique-without-author.input';
import { ChatCreateManyAuthorInputEnvelope } from './chat-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ChatWhereUniqueInput } from './chat-where-unique.input';
import { ChatUpdateWithWhereUniqueWithoutAuthorInput } from './chat-update-with-where-unique-without-author.input';
import { ChatUpdateManyWithWhereWithoutAuthorInput } from './chat-update-many-with-where-without-author.input';
import { ChatScalarWhereInput } from './chat-scalar-where.input';

@InputType()
export class ChatUpdateManyWithoutAuthorNestedInput {

    @Field(() => [ChatCreateWithoutAuthorInput], {nullable:true})
    @Type(() => ChatCreateWithoutAuthorInput)
    create?: Array<ChatCreateWithoutAuthorInput>;

    @Field(() => [ChatCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => ChatCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<ChatCreateOrConnectWithoutAuthorInput>;

    @Field(() => [ChatUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ChatUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<ChatUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => ChatCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => ChatCreateManyAuthorInputEnvelope)
    createMany?: ChatCreateManyAuthorInputEnvelope;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatWhereUniqueInput], {nullable:true})
    @Type(() => ChatWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ChatWhereUniqueInput, 'id'>>;

    @Field(() => [ChatUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => ChatUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<ChatUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [ChatUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => ChatUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<ChatUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    @Type(() => ChatScalarWhereInput)
    deleteMany?: Array<ChatScalarWhereInput>;
}
