import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokensWhereInput } from './tokens-where.input';

@InputType()
export class TokensNullableRelationFilter {

    @Field(() => TokensWhereInput, {nullable:true})
    is?: TokensWhereInput;

    @Field(() => TokensWhereInput, {nullable:true})
    isNot?: TokensWhereInput;
}
