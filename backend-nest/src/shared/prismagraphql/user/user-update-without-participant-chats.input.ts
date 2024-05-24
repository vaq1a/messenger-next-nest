import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { TokensUpdateOneWithoutUserNestedInput } from '../tokens/tokens-update-one-without-user-nested.input';
import { ChatUpdateManyWithoutAuthorNestedInput } from '../chat/chat-update-many-without-author-nested.input';
import { MessageUpdateManyWithoutAuthorNestedInput } from '../message/message-update-many-without-author-nested.input';

@InputType()
export class UserUpdateWithoutParticipantChatsInput {

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

    @Field(() => TokensUpdateOneWithoutUserNestedInput, {nullable:true})
    tokens?: TokensUpdateOneWithoutUserNestedInput;

    @Field(() => ChatUpdateManyWithoutAuthorNestedInput, {nullable:true})
    createdChats?: ChatUpdateManyWithoutAuthorNestedInput;

    @Field(() => MessageUpdateManyWithoutAuthorNestedInput, {nullable:true})
    messages?: MessageUpdateManyWithoutAuthorNestedInput;
}
