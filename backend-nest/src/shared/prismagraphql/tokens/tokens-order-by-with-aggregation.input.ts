import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TokensCountOrderByAggregateInput } from './tokens-count-order-by-aggregate.input';
import { TokensMaxOrderByAggregateInput } from './tokens-max-order-by-aggregate.input';
import { TokensMinOrderByAggregateInput } from './tokens-min-order-by-aggregate.input';

@InputType()
export class TokensOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accessToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    refreshToken?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => TokensCountOrderByAggregateInput, {nullable:true})
    _count?: TokensCountOrderByAggregateInput;

    @Field(() => TokensMaxOrderByAggregateInput, {nullable:true})
    _max?: TokensMaxOrderByAggregateInput;

    @Field(() => TokensMinOrderByAggregateInput, {nullable:true})
    _min?: TokensMinOrderByAggregateInput;
}
