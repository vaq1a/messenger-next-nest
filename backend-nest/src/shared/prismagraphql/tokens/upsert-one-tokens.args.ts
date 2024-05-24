import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TokensWhereUniqueInput } from './tokens-where-unique.input';
import { Type } from 'class-transformer';
import { TokensCreateInput } from './tokens-create.input';
import { TokensUpdateInput } from './tokens-update.input';

@ArgsType()
export class UpsertOneTokensArgs {

    @Field(() => TokensWhereUniqueInput, {nullable:false})
    @Type(() => TokensWhereUniqueInput)
    where!: Prisma.AtLeast<TokensWhereUniqueInput, 'id' | 'refreshToken' | 'userId'>;

    @Field(() => TokensCreateInput, {nullable:false})
    @Type(() => TokensCreateInput)
    create!: TokensCreateInput;

    @Field(() => TokensUpdateInput, {nullable:false})
    @Type(() => TokensUpdateInput)
    update!: TokensUpdateInput;
}
