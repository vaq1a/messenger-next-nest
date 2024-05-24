import { registerEnumType } from '@nestjs/graphql';

export enum MessageScalarFieldEnum {
    id = "id",
    authorId = "authorId",
    chatId = "chatId",
    text = "text",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(MessageScalarFieldEnum, { name: 'MessageScalarFieldEnum', description: undefined })
