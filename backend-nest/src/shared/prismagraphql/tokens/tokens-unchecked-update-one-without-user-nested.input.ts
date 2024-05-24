import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokensCreateWithoutUserInput } from './tokens-create-without-user.input';
import { Type } from 'class-transformer';
import { TokensCreateOrConnectWithoutUserInput } from './tokens-create-or-connect-without-user.input';
import { TokensUpsertWithoutUserInput } from './tokens-upsert-without-user.input';
import { TokensWhereInput } from './tokens-where.input';
import { Prisma } from '@prisma/client';
import { TokensWhereUniqueInput } from './tokens-where-unique.input';
import { TokensUpdateToOneWithWhereWithoutUserInput } from './tokens-update-to-one-with-where-without-user.input';

@InputType()
export class TokensUncheckedUpdateOneWithoutUserNestedInput {

    @Field(() => TokensCreateWithoutUserInput, {nullable:true})
    @Type(() => TokensCreateWithoutUserInput)
    create?: TokensCreateWithoutUserInput;

    @Field(() => TokensCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => TokensCreateOrConnectWithoutUserInput)
    connectOrCreate?: TokensCreateOrConnectWithoutUserInput;

    @Field(() => TokensUpsertWithoutUserInput, {nullable:true})
    @Type(() => TokensUpsertWithoutUserInput)
    upsert?: TokensUpsertWithoutUserInput;

    @Field(() => TokensWhereInput, {nullable:true})
    @Type(() => TokensWhereInput)
    disconnect?: TokensWhereInput;

    @Field(() => TokensWhereInput, {nullable:true})
    @Type(() => TokensWhereInput)
    delete?: TokensWhereInput;

    @Field(() => TokensWhereUniqueInput, {nullable:true})
    @Type(() => TokensWhereUniqueInput)
    connect?: Prisma.AtLeast<TokensWhereUniqueInput, 'id' | 'refreshToken' | 'userId'>;

    @Field(() => TokensUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => TokensUpdateToOneWithWhereWithoutUserInput)
    update?: TokensUpdateToOneWithWhereWithoutUserInput;
}
