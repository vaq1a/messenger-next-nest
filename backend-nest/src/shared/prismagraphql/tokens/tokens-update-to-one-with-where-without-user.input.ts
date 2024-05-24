import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokensWhereInput } from './tokens-where.input';
import { Type } from 'class-transformer';
import { TokensUpdateWithoutUserInput } from './tokens-update-without-user.input';

@InputType()
export class TokensUpdateToOneWithWhereWithoutUserInput {

    @Field(() => TokensWhereInput, {nullable:true})
    @Type(() => TokensWhereInput)
    where?: TokensWhereInput;

    @Field(() => TokensUpdateWithoutUserInput, {nullable:false})
    @Type(() => TokensUpdateWithoutUserInput)
    data!: TokensUpdateWithoutUserInput;
}
