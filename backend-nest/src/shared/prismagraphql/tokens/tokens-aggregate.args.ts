import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokensWhereInput } from './tokens-where.input';
import { Type } from 'class-transformer';
import { TokensOrderByWithRelationInput } from './tokens-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TokensWhereUniqueInput } from './tokens-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TokensCountAggregateInput } from './tokens-count-aggregate.input';
import { TokensMinAggregateInput } from './tokens-min-aggregate.input';
import { TokensMaxAggregateInput } from './tokens-max-aggregate.input';

@ArgsType()
export class TokensAggregateArgs {

    @Field(() => TokensWhereInput, {nullable:true})
    @Type(() => TokensWhereInput)
    where?: TokensWhereInput;

    @Field(() => [TokensOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TokensOrderByWithRelationInput>;

    @Field(() => TokensWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TokensWhereUniqueInput, 'id' | 'refreshToken' | 'userId'>;

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
