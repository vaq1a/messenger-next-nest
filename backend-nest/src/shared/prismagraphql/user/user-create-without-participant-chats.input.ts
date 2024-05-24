import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { TokensCreateNestedOneWithoutUserInput } from '../tokens/tokens-create-nested-one-without-user.input';
import { ChatCreateNestedManyWithoutAuthorInput } from '../chat/chat-create-nested-many-without-author.input';
import { MessageCreateNestedManyWithoutAuthorInput } from '../message/message-create-nested-many-without-author.input';

@InputType()
export class UserCreateWithoutParticipantChatsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TokensCreateNestedOneWithoutUserInput, {nullable:true})
    tokens?: TokensCreateNestedOneWithoutUserInput;

    @Field(() => ChatCreateNestedManyWithoutAuthorInput, {nullable:true})
    createdChats?: ChatCreateNestedManyWithoutAuthorInput;

    @Field(() => MessageCreateNestedManyWithoutAuthorInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutAuthorInput;
}
