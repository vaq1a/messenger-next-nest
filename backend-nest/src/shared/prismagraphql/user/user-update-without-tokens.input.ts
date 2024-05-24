import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ChatUpdateManyWithoutAuthorNestedInput } from '../chat/chat-update-many-without-author-nested.input';
import { MessageUpdateManyWithoutAuthorNestedInput } from '../message/message-update-many-without-author-nested.input';
import { ChatUpdateManyWithoutParticipantUsersNestedInput } from '../chat/chat-update-many-without-participant-users-nested.input';

@InputType()
export class UserUpdateWithoutTokensInput {

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

    @Field(() => ChatUpdateManyWithoutAuthorNestedInput, {nullable:true})
    createdChats?: ChatUpdateManyWithoutAuthorNestedInput;

    @Field(() => MessageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutAuthorNestedInput;

    @Field(() => ChatUpdateManyWithoutParticipantUsersNestedInput, {nullable:true})
    participantChats?: ChatUpdateManyWithoutParticipantUsersNestedInput;
}
