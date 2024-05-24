import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../../shared/prismagraphql/prisma';

@ObjectType()
export class UserResponse {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Role, { nullable: false, defaultValue: 'USER' })
  role!: keyof typeof Role;
}
