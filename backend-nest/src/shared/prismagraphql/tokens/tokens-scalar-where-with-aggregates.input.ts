import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TokensScalarWhereWithAggregatesInput {

    @Field(() => [TokensScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TokensScalarWhereWithAggregatesInput>;

    @Field(() => [TokensScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TokensScalarWhereWithAggregatesInput>;

    @Field(() => [TokensScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TokensScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    accessToken?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    refreshToken?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
