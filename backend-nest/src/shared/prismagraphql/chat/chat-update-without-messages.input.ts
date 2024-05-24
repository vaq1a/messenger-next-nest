import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCreatedChatsNestedInput } from '../user/user-update-one-required-without-created-chats-nested.input';
import { UserUpdateManyWithoutParticipantChatsNestedInput } from '../user/user-update-many-without-participant-chats-nested.input';

@InputType()
export class ChatUpdateWithoutMessagesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCreatedChatsNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutCreatedChatsNestedInput;

    @Field(() => UserUpdateManyWithoutParticipantChatsNestedInput, {nullable:true})
    participantUsers?: UserUpdateManyWithoutParticipantChatsNestedInput;
}
