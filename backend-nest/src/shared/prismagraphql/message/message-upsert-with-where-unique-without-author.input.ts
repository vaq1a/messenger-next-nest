import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { Type } from 'class-transformer';
import { MessageUpdateWithoutAuthorInput } from './message-update-without-author.input';
import { MessageCreateWithoutAuthorInput } from './message-create-without-author.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    @Type(() => MessageWhereUniqueInput)
    where!: Prisma.AtLeast<MessageWhereUniqueInput, 'id'>;

    @Field(() => MessageUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => MessageUpdateWithoutAuthorInput)
    update!: MessageUpdateWithoutAuthorInput;

    @Field(() => MessageCreateWithoutAuthorInput, {nullable:false})
    @Type(() => MessageCreateWithoutAuthorInput)
    create!: MessageCreateWithoutAuthorInput;
}
