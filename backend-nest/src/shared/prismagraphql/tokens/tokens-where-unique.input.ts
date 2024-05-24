import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokensWhereInput } from './tokens-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class TokensWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    refreshToken?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => [TokensWhereInput], {nullable:true})
    AND?: Array<TokensWhereInput>;

    @Field(() => [TokensWhereInput], {nullable:true})
    OR?: Array<TokensWhereInput>;

    @Field(() => [TokensWhereInput], {nullable:true})
    NOT?: Array<TokensWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    accessToken?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
