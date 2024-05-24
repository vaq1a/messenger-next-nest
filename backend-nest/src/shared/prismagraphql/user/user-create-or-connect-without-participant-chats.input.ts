import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutParticipantChatsInput } from './user-create-without-participant-chats.input';

@InputType()
export class UserCreateOrConnectWithoutParticipantChatsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutParticipantChatsInput, {nullable:false})
    @Type(() => UserCreateWithoutParticipantChatsInput)
    create!: UserCreateWithoutParticipantChatsInput;
}
