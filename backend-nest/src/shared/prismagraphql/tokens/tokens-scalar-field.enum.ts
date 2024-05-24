import { registerEnumType } from '@nestjs/graphql';

export enum TokensScalarFieldEnum {
    id = "id",
    accessToken = "accessToken",
    refreshToken = "refreshToken",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}


registerEnumType(TokensScalarFieldEnum, { name: 'TokensScalarFieldEnum', description: undefined })
