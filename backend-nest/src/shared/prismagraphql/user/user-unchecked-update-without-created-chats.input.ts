import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TokensUncheckedUpdateOneWithoutUserNestedInput } from '../tokens/tokens-unchecked-update-one-without-user-nested.input';
import { MessageUncheckedUpdateManyWithoutAuthorNestedInput } from '../message/message-unchecked-update-many-without-author-nested.input';
import { ChatUncheckedUpdateManyWithoutParticipantUsersNestedInput } from '../chat/chat-unchecked-update-many-without-participant-users-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutCreatedChatsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => TokensUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    tokens?: TokensUncheckedUpdateOneWithoutUserNestedInput;

    @Field(() => MessageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => ChatUncheckedUpdateManyWithoutParticipantUsersNestedInput, {nullable:true})
    participantChats?: ChatUncheckedUpdateManyWithoutParticipantUsersNestedInput;
}
