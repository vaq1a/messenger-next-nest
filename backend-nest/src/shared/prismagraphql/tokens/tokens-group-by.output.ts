import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TokensCountAggregate } from './tokens-count-aggregate.output';
import { TokensMinAggregate } from './tokens-min-aggregate.output';
import { TokensMaxAggregate } from './tokens-max-aggregate.output';

@ObjectType()
export class TokensGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    accessToken!: string;

    @Field(() => String, {nullable:false})
    refreshToken!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => TokensCountAggregate, {nullable:true})
    _count?: TokensCountAggregate;

    @Field(() => TokensMinAggregate, {nullable:true})
    _min?: TokensMinAggregate;

    @Field(() => TokensMaxAggregate, {nullable:true})
    _max?: TokensMaxAggregate;
}
