import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokensWhereInput } from './tokens-where.input';
import { Type } from 'class-transformer';
import { TokensOrderByWithAggregationInput } from './tokens-order-by-with-aggregation.input';
import { TokensScalarFieldEnum } from './tokens-scalar-field.enum';
import { TokensScalarWhereWithAggregatesInput } from './tokens-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TokensCountAggregateInput } from './tokens-count-aggregate.input';
import { TokensMinAggregateInput } from './tokens-min-aggregate.input';
import { TokensMaxAggregateInput } from './tokens-max-aggregate.input';

@ArgsType()
export class TokensGroupByArgs {

    @Field(() => TokensWhereInput, {nullable:true})
    @Type(() => TokensWhereInput)
    where?: TokensWhereInput;

    @Field(() => [TokensOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TokensOrderByWithAggregationInput>;

    @Field(() => [TokensScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TokensScalarFieldEnum>;

    @Field(() => TokensScalarWhereWithAggregatesInput, {nullable:true})
    having?: TokensScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TokensCountAggregateInput, {nullable:true})
    _count?: TokensCountAggregateInput;

    @Field(() => TokensMinAggregateInput, {nullable:true})
    _min?: TokensMinAggregateInput;

    @Field(() => TokensMaxAggregateInput, {nullable:true})
    _max?: TokensMaxAggregateInput;
}
