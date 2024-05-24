import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { ChatUncheckedCreateNestedManyWithoutAuthorInput } from '../chat/chat-unchecked-create-nested-many-without-author.input';
import { MessageUncheckedCreateNestedManyWithoutAuthorInput } from '../message/message-unchecked-create-nested-many-without-author.input';
import { ChatUncheckedCreateNestedManyWithoutParticipantUsersInput } from '../chat/chat-unchecked-create-nested-many-without-participant-users.input';

@InputType()
export class UserUncheckedCreateWithoutTokensInput {

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

    @Field(() => ChatUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    createdChats?: ChatUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => MessageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => ChatUncheckedCreateNestedManyWithoutParticipantUsersInput, {nullable:true})
    participantChats?: ChatUncheckedCreateNestedManyWithoutParticipantUsersInput;
}
