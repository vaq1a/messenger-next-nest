import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokensCreateManyInput } from './tokens-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTokensArgs {

    @Field(() => [TokensCreateManyInput], {nullable:false})
    @Type(() => TokensCreateManyInput)
    data!: Array<TokensCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
