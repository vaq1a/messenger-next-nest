import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';

@ObjectType()
export class UserGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    password!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => UserCountAggregate, {nullable:true})
    _count?: UserCountAggregate;

    @Field(() => UserMinAggregate, {nullable:true})
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: UserMaxAggregate;
}
