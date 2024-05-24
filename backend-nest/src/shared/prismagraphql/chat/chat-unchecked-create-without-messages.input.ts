import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutParticipantChatsInput } from '../user/user-unchecked-create-nested-many-without-participant-chats.input';

@InputType()
export class ChatUncheckedCreateWithoutMessagesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutParticipantChatsInput, {nullable:true})
    participantUsers?: UserUncheckedCreateNestedManyWithoutParticipantChatsInput;
}
