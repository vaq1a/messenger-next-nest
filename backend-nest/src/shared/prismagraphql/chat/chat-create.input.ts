import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCreatedChatsInput } from '../user/user-create-nested-one-without-created-chats.input';
import { UserCreateNestedManyWithoutParticipantChatsInput } from '../user/user-create-nested-many-without-participant-chats.input';
import { MessageCreateNestedManyWithoutChatInput } from '../message/message-create-nested-many-without-chat.input';

@InputType()
export class ChatCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCreatedChatsInput, {nullable:false})
    author!: UserCreateNestedOneWithoutCreatedChatsInput;

    @Field(() => UserCreateNestedManyWithoutParticipantChatsInput, {nullable:true})
    participantUsers?: UserCreateNestedManyWithoutParticipantChatsInput;

    @Field(() => MessageCreateNestedManyWithoutChatInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutChatInput;
}
