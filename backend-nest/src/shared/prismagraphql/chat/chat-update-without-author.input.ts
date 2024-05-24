import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateManyWithoutParticipantChatsNestedInput } from '../user/user-update-many-without-participant-chats-nested.input';
import { MessageUpdateManyWithoutChatNestedInput } from '../message/message-update-many-without-chat-nested.input';

@InputType()
export class ChatUpdateWithoutAuthorInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateManyWithoutParticipantChatsNestedInput, {nullable:true})
    participantUsers?: UserUpdateManyWithoutParticipantChatsNestedInput;

    @Field(() => MessageUpdateManyWithoutChatNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutChatNestedInput;
}
