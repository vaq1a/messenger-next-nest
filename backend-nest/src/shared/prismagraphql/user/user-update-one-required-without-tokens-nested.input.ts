import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTokensInput } from './user-create-without-tokens.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTokensInput } from './user-create-or-connect-without-tokens.input';
import { UserUpsertWithoutTokensInput } from './user-upsert-without-tokens.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutTokensInput } from './user-update-to-one-with-where-without-tokens.input';

@InputType()
export class UserUpdateOneRequiredWithoutTokensNestedInput {

    @Field(() => UserCreateWithoutTokensInput, {nullable:true})
    @Type(() => UserCreateWithoutTokensInput)
    create?: UserCreateWithoutTokensInput;

    @Field(() => UserCreateOrConnectWithoutTokensInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTokensInput)
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput;

    @Field(() => UserUpsertWithoutTokensInput, {nullable:true})
    @Type(() => UserUpsertWithoutTokensInput)
    upsert?: UserUpsertWithoutTokensInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutTokensInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutTokensInput)
    update?: UserUpdateToOneWithWhereWithoutTokensInput;
}
