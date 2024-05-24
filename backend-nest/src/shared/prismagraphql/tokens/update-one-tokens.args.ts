import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokensUpdateInput } from './tokens-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TokensWhereUniqueInput } from './tokens-where-unique.input';

@ArgsType()
export class UpdateOneTokensArgs {

    @Field(() => TokensUpdateInput, {nullable:false})
    @Type(() => TokensUpdateInput)
    data!: TokensUpdateInput;

    @Field(() => TokensWhereUniqueInput, {nullable:false})
    @Type(() => TokensWhereUniqueInput)
    where!: Prisma.AtLeast<TokensWhereUniqueInput, 'id' | 'refreshToken' | 'userId'>;
}
