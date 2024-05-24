import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { TokensUncheckedCreateNestedOneWithoutUserInput } from '../tokens/tokens-unchecked-create-nested-one-without-user.input';
import { ChatUncheckedCreateNestedManyWithoutAuthorInput } from '../chat/chat-unchecked-create-nested-many-without-author.input';
import { ChatUncheckedCreateNestedManyWithoutParticipantUsersInput } from '../chat/chat-unchecked-create-nested-many-without-participant-users.input';

@InputType()
export class UserUncheckedCreateWithoutMessagesInput {

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

    @Field(() => TokensUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    tokens?: TokensUncheckedCreateNestedOneWithoutUserInput;

    @Field(() => ChatUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    createdChats?: ChatUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => ChatUncheckedCreateNestedManyWithoutParticipantUsersInput, {nullable:true})
    participantChats?: ChatUncheckedCreateNestedManyWithoutParticipantUsersInput;
}
