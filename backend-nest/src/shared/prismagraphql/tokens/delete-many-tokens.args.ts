import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokensWhereInput } from './tokens-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyTokensArgs {

    @Field(() => TokensWhereInput, {nullable:true})
    @Type(() => TokensWhereInput)
    where?: TokensWhereInput;
}
