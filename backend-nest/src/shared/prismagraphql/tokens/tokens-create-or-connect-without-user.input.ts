import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TokensWhereUniqueInput } from './tokens-where-unique.input';
import { Type } from 'class-transformer';
import { TokensCreateWithoutUserInput } from './tokens-create-without-user.input';

@InputType()
export class TokensCreateOrConnectWithoutUserInput {

    @Field(() => TokensWhereUniqueInput, {nullable:false})
    @Type(() => TokensWhereUniqueInput)
    where!: Prisma.AtLeast<TokensWhereUniqueInput, 'id' | 'refreshToken' | 'userId'>;

    @Field(() => TokensCreateWithoutUserInput, {nullable:false})
    @Type(() => TokensCreateWithoutUserInput)
    create!: TokensCreateWithoutUserInput;
}
