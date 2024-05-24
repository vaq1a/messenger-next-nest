import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TokensWhereUniqueInput } from './tokens-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTokensOrThrowArgs {

    @Field(() => TokensWhereUniqueInput, {nullable:false})
    @Type(() => TokensWhereUniqueInput)
    where!: Prisma.AtLeast<TokensWhereUniqueInput, 'id' | 'refreshToken' | 'userId'>;
}
