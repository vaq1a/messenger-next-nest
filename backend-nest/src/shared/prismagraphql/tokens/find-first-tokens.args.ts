import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokensWhereInput } from './tokens-where.input';
import { Type } from 'class-transformer';
import { TokensOrderByWithRelationInput } from './tokens-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TokensWhereUniqueInput } from './tokens-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TokensScalarFieldEnum } from './tokens-scalar-field.enum';

@ArgsType()
export class FindFirstTokensArgs {

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

    @Field(() => [TokensScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TokensScalarFieldEnum>;
}
