export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AccessTokenModel = {
  __typename?: 'AccessTokenModel';
  accessToken: Scalars['String']['output'];
};

export type Chat = {
  __typename?: 'Chat';
  _count: ChatCount;
  author: User;
  authorId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  messages?: Maybe<Array<Message>>;
  name: Scalars['String']['output'];
  participantUsers?: Maybe<Array<User>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ChatCount = {
  __typename?: 'ChatCount';
  messages: Scalars['Int']['output'];
  participantUsers: Scalars['Int']['output'];
};

export type ChatCountAggregate = {
  __typename?: 'ChatCountAggregate';
  _all: Scalars['Int']['output'];
  authorId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ChatCreateManyAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ChatCreateManyAuthorInputEnvelope = {
  data: Array<ChatCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<ChatCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<ChatCreateManyAuthorInputEnvelope>;
};

export type ChatCreateNestedManyWithoutParticipantUsersInput = {
  connect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatCreateOrConnectWithoutParticipantUsersInput>>;
  create?: InputMaybe<Array<ChatCreateWithoutParticipantUsersInput>>;
};

export type ChatCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<ChatCreateWithoutMessagesInput>;
};

export type ChatCreateOrConnectWithoutAuthorInput = {
  create: ChatCreateWithoutAuthorInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateOrConnectWithoutMessagesInput = {
  create: ChatCreateWithoutMessagesInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateOrConnectWithoutParticipantUsersInput = {
  create: ChatCreateWithoutParticipantUsersInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateWithoutAuthorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutChatInput>;
  name: Scalars['String']['input'];
  participantUsers?: InputMaybe<UserCreateNestedManyWithoutParticipantChatsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ChatCreateWithoutMessagesInput = {
  author: UserCreateNestedOneWithoutCreatedChatsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  participantUsers?: InputMaybe<UserCreateNestedManyWithoutParticipantChatsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ChatCreateWithoutParticipantUsersInput = {
  author: UserCreateNestedOneWithoutCreatedChatsInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutChatInput>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ChatListRelationFilter = {
  every?: InputMaybe<ChatWhereInput>;
  none?: InputMaybe<ChatWhereInput>;
  some?: InputMaybe<ChatWhereInput>;
};

export type ChatMaxAggregate = {
  __typename?: 'ChatMaxAggregate';
  authorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChatMinAggregate = {
  __typename?: 'ChatMinAggregate';
  authorId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChatRelationFilter = {
  is?: InputMaybe<ChatWhereInput>;
  isNot?: InputMaybe<ChatWhereInput>;
};

export type ChatWhereInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  NOT?: InputMaybe<Array<ChatWhereInput>>;
  OR?: InputMaybe<Array<ChatWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  participantUsers?: InputMaybe<UserListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ChatWhereUniqueInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  NOT?: InputMaybe<Array<ChatWhereInput>>;
  OR?: InputMaybe<Array<ChatWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<MessageListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  participantUsers?: InputMaybe<UserListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type Message = {
  __typename?: 'Message';
  author: User;
  authorId: Scalars['String']['output'];
  chat: Chat;
  chatId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type MessageCountAggregate = {
  __typename?: 'MessageCountAggregate';
  _all: Scalars['Int']['output'];
  authorId: Scalars['Int']['output'];
  chatId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  text: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type MessageCreateManyAuthorInput = {
  chatId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageCreateManyAuthorInputEnvelope = {
  data: Array<MessageCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MessageCreateManyChatInput = {
  authorId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageCreateManyChatInputEnvelope = {
  data: Array<MessageCreateManyChatInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MessageCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<MessageCreateManyAuthorInputEnvelope>;
};

export type MessageCreateNestedManyWithoutChatInput = {
  connect?: InputMaybe<Array<MessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MessageCreateOrConnectWithoutChatInput>>;
  create?: InputMaybe<Array<MessageCreateWithoutChatInput>>;
  createMany?: InputMaybe<MessageCreateManyChatInputEnvelope>;
};

export type MessageCreateOrConnectWithoutAuthorInput = {
  create: MessageCreateWithoutAuthorInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateOrConnectWithoutChatInput = {
  create: MessageCreateWithoutChatInput;
  where: MessageWhereUniqueInput;
};

export type MessageCreateWithoutAuthorInput = {
  chat: ChatCreateNestedOneWithoutMessagesInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageCreateWithoutChatInput = {
  author: UserCreateNestedOneWithoutMessagesInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MessageListRelationFilter = {
  every?: InputMaybe<MessageWhereInput>;
  none?: InputMaybe<MessageWhereInput>;
  some?: InputMaybe<MessageWhereInput>;
};

export type MessageMaxAggregate = {
  __typename?: 'MessageMaxAggregate';
  authorId?: Maybe<Scalars['String']['output']>;
  chatId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MessageMinAggregate = {
  __typename?: 'MessageMinAggregate';
  authorId?: Maybe<Scalars['String']['output']>;
  chatId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  chat?: InputMaybe<ChatRelationFilter>;
  chatId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MessageWhereUniqueInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  chat?: InputMaybe<ChatRelationFilter>;
  chatId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUsersToChat: Chat;
  createChat: Chat;
  deleteChat: Scalars['String']['output'];
  enterChat: Scalars['Boolean']['output'];
  exiteFromChat: Scalars['Boolean']['output'];
  getNewTokens: AccessTokenModel;
  leaveChat: Scalars['Boolean']['output'];
  sendMessage: Message;
  signIn: AccessTokenModel;
  signUp: UserResponse;
  uploadImage: Scalars['Boolean']['output'];
  userStartedTypingMutation: UserResponse;
  userStoppedTypingMutation: UserResponse;
};


export type MutationAddUsersToChatArgs = {
  chatId: Scalars['String']['input'];
  userIds: Array<Scalars['String']['input']>;
};


export type MutationCreateChatArgs = {
  chatName: Scalars['String']['input'];
  companionUserId: Scalars['String']['input'];
};


export type MutationDeleteChatArgs = {
  chatId: Scalars['String']['input'];
};


export type MutationEnterChatArgs = {
  chatId: Scalars['String']['input'];
};


export type MutationExiteFromChatArgs = {
  chatId: Scalars['String']['input'];
};


export type MutationLeaveChatArgs = {
  chatId: Scalars['String']['input'];
};


export type MutationSendMessageArgs = {
  chatId: Scalars['String']['input'];
  content: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  data: SignInInput;
};


export type MutationSignUpArgs = {
  data: UserCreateInput;
};


export type MutationUploadImageArgs = {
  image: Scalars['Upload']['input'];
};


export type MutationUserStartedTypingMutationArgs = {
  chatId: Scalars['String']['input'];
};


export type MutationUserStoppedTypingMutationArgs = {
  chatId: Scalars['String']['input'];
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type PingResponse = {
  __typename?: 'PingResponse';
  name: Scalars['String']['output'];
  surname: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: Array<UserResponse>;
  getChat: Chat;
  getChatsForUser: Array<Chat>;
  getMessagesForChat: Array<Message>;
  getUser: UserResponse;
  ping: PingResponse;
};


export type QueryGetChatArgs = {
  chatId: Scalars['String']['input'];
};


export type QueryGetMessagesForChatArgs = {
  chatId: Scalars['String']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  liveUsersInChat?: Maybe<Array<User>>;
  newMessage?: Maybe<Message>;
  userStartedTyping?: Maybe<UserResponse>;
  userStoppedTyping?: Maybe<UserResponse>;
};


export type SubscriptionLiveUsersInChatArgs = {
  chatId: Scalars['String']['input'];
};


export type SubscriptionNewMessageArgs = {
  chatId: Scalars['String']['input'];
};


export type SubscriptionUserStartedTypingArgs = {
  chatId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type SubscriptionUserStoppedTypingArgs = {
  chatId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Tokens = {
  __typename?: 'Tokens';
  accessToken: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  refreshToken: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type TokensCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<TokensWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TokensCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<TokensCreateWithoutUserInput>;
};

export type TokensCreateOrConnectWithoutUserInput = {
  create: TokensCreateWithoutUserInput;
  where: TokensWhereUniqueInput;
};

export type TokensCreateWithoutUserInput = {
  accessToken: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  refreshToken: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TokensNullableRelationFilter = {
  is?: InputMaybe<TokensWhereInput>;
  isNot?: InputMaybe<TokensWhereInput>;
};

export type TokensWhereInput = {
  AND?: InputMaybe<Array<TokensWhereInput>>;
  NOT?: InputMaybe<Array<TokensWhereInput>>;
  OR?: InputMaybe<Array<TokensWhereInput>>;
  accessToken?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  refreshToken?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TokensWhereUniqueInput = {
  AND?: InputMaybe<Array<TokensWhereInput>>;
  NOT?: InputMaybe<Array<TokensWhereInput>>;
  OR?: InputMaybe<Array<TokensWhereInput>>;
  accessToken?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  createdAt: Scalars['DateTime']['output'];
  createdChats?: Maybe<Array<Chat>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  messages?: Maybe<Array<Message>>;
  name: Scalars['String']['output'];
  participantChats?: Maybe<Array<Chat>>;
  role: Role;
  tokens?: Maybe<Tokens>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCount = {
  __typename?: 'UserCount';
  createdChats: Scalars['Int']['output'];
  messages: Scalars['Int']['output'];
  participantChats: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdChats?: InputMaybe<ChatCreateNestedManyWithoutAuthorInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name: Scalars['String']['input'];
  participantChats?: InputMaybe<ChatCreateNestedManyWithoutParticipantUsersInput>;
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  tokens?: InputMaybe<TokensCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateNestedManyWithoutParticipantChatsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutParticipantChatsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutParticipantChatsInput>>;
};

export type UserCreateNestedOneWithoutCreatedChatsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedChatsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedChatsInput>;
};

export type UserCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<UserCreateWithoutMessagesInput>;
};

export type UserCreateOrConnectWithoutCreatedChatsInput = {
  create: UserCreateWithoutCreatedChatsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMessagesInput = {
  create: UserCreateWithoutMessagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutParticipantChatsInput = {
  create: UserCreateWithoutParticipantChatsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCreatedChatsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name: Scalars['String']['input'];
  participantChats?: InputMaybe<ChatCreateNestedManyWithoutParticipantUsersInput>;
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  tokens?: InputMaybe<TokensCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutMessagesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdChats?: InputMaybe<ChatCreateNestedManyWithoutAuthorInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  participantChats?: InputMaybe<ChatCreateNestedManyWithoutParticipantUsersInput>;
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  tokens?: InputMaybe<TokensCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWithoutParticipantChatsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdChats?: InputMaybe<ChatCreateNestedManyWithoutAuthorInput>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<MessageCreateNestedManyWithoutAuthorInput>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<Role>;
  tokens?: InputMaybe<TokensCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  role: Role;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdChats?: InputMaybe<ChatListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  messages?: InputMaybe<MessageListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  participantChats?: InputMaybe<ChatListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  tokens?: InputMaybe<TokensNullableRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdChats?: InputMaybe<ChatListRelationFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  messages?: InputMaybe<MessageListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  participantChats?: InputMaybe<ChatListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  tokens?: InputMaybe<TokensNullableRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};
