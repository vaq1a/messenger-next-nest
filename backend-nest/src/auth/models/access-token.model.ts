import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AccessTokenModel {
  @Field(() => String, { nullable: false })
  accessToken!: string;
}
