import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokensUpdateWithoutUserInput } from './tokens-update-without-user.input';
import { Type } from 'class-transformer';
import { TokensCreateWithoutUserInput } from './tokens-create-without-user.input';
import { TokensWhereInput } from './tokens-where.input';

@InputType()
export class TokensUpsertWithoutUserInput {

    @Field(() => TokensUpdateWithoutUserInput, {nullable:false})
    @Type(() => TokensUpdateWithoutUserInput)
    update!: TokensUpdateWithoutUserInput;

    @Field(() => TokensCreateWithoutUserInput, {nullable:false})
    @Type(() => TokensCreateWithoutUserInput)
    create!: TokensCreateWithoutUserInput;

    @Field(() => TokensWhereInput, {nullable:true})
    @Type(() => TokensWhereInput)
    where?: TokensWhereInput;
}
