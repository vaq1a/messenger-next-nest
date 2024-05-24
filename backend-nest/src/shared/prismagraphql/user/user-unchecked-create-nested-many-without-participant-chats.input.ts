import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutParticipantChatsInput } from './user-create-without-participant-chats.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutParticipantChatsInput } from './user-create-or-connect-without-participant-chats.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutParticipantChatsInput {

    @Field(() => [UserCreateWithoutParticipantChatsInput], {nullable:true})
    @Type(() => UserCreateWithoutParticipantChatsInput)
    create?: Array<UserCreateWithoutParticipantChatsInput>;

    @Field(() => [UserCreateOrConnectWithoutParticipantChatsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutParticipantChatsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutParticipantChatsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>>;
}
