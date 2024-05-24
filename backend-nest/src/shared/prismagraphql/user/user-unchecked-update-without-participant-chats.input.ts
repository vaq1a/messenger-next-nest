import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TokensUncheckedUpdateOneWithoutUserNestedInput } from '../tokens/tokens-unchecked-update-one-without-user-nested.input';
import { ChatUncheckedUpdateManyWithoutAuthorNestedInput } from '../chat/chat-unchecked-update-many-without-author-nested.input';
import { MessageUncheckedUpdateManyWithoutAuthorNestedInput } from '../message/message-unchecked-update-many-without-author-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutParticipantChatsInput {

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

    @Field(() => ChatUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    createdChats?: ChatUncheckedUpdateManyWithoutAuthorNestedInput;

    @Field(() => MessageUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutAuthorNestedInput;
}
