import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokensCreateInput } from './tokens-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTokensArgs {

    @Field(() => TokensCreateInput, {nullable:false})
    @Type(() => TokensCreateInput)
    data!: TokensCreateInput;
}
