import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ChatScalarWhereInput {

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    AND?: Array<ChatScalarWhereInput>;

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    OR?: Array<ChatScalarWhereInput>;

    @Field(() => [ChatScalarWhereInput], {nullable:true})
    NOT?: Array<ChatScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    authorId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
