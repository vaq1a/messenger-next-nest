import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatCreateManyAuthorInput } from './chat-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class ChatCreateManyAuthorInputEnvelope {

    @Field(() => [ChatCreateManyAuthorInput], {nullable:false})
    @Type(() => ChatCreateManyAuthorInput)
    data!: Array<ChatCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
