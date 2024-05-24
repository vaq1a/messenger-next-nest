import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokensUpdateManyMutationInput } from './tokens-update-many-mutation.input';
import { Type } from 'class-transformer';
import { TokensWhereInput } from './tokens-where.input';

@ArgsType()
export class UpdateManyTokensArgs {

    @Field(() => TokensUpdateManyMutationInput, {nullable:false})
    @Type(() => TokensUpdateManyMutationInput)
    data!: TokensUpdateManyMutationInput;

    @Field(() => TokensWhereInput, {nullable:true})
    @Type(() => TokensWhereInput)
    where?: TokensWhereInput;
}
