import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokensCreateWithoutUserInput } from './tokens-create-without-user.input';
import { Type } from 'class-transformer';
import { TokensCreateOrConnectWithoutUserInput } from './tokens-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { TokensWhereUniqueInput } from './tokens-where-unique.input';

@InputType()
export class TokensCreateNestedOneWithoutUserInput {

    @Field(() => TokensCreateWithoutUserInput, {nullable:true})
    @Type(() => TokensCreateWithoutUserInput)
    create?: TokensCreateWithoutUserInput;

    @Field(() => TokensCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => TokensCreateOrConnectWithoutUserInput)
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput;

    @Field(() => TokensWhereUniqueInput, {nullable:true})
    @Type(() => TokensWhereUniqueInput)
    connect?: Prisma.AtLeast<TokensWhereUniqueInput, 'id' | 'refreshToken' | 'userId'>;
}
