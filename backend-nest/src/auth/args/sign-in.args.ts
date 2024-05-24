import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SignInInput } from './sign-in.input';

@ArgsType()
export class SignInArgs {
  @Field(() => SignInInput, { nullable: false })
  @Type(() => SignInInput)
  data!: SignInInput;
}
