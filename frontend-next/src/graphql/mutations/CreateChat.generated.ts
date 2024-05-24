import * as Types from '../../__generated__/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateChatMutationVariables = Types.Exact<{
  chatName: Types.Scalars['String']['input'];
  companionUserId: Types.Scalars['String']['input'];
}>;


export type CreateChatMutation = { __typename?: 'Mutation', createChat: { __typename?: 'Chat', id: string, name: string, author: { __typename?: 'User', id: string, email: string, name: string }, messages?: Array<{ __typename?: 'Message', authorId: string, chatId: string }> | null, participantUsers?: Array<{ __typename?: 'User', id: string, email: string, name: string }> | null } };


export const CreateChatDocument = gql`
    mutation CreateChat($chatName: String!, $companionUserId: String!) {
  createChat(chatName: $chatName, companionUserId: $companionUserId) {
    id
    name
    author {
      id
      email
      name
    }
    messages {
      authorId
      chatId
    }
    participantUsers {
      id
      email
      name
    }
  }
}
    `;
export type CreateChatMutationFn = Apollo.MutationFunction<CreateChatMutation, CreateChatMutationVariables>;

/**
 * __useCreateChatMutation__
 *
 * To run a mutation, you first call `useCreateChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatMutation, { data, loading, error }] = useCreateChatMutation({
 *   variables: {
 *      chatName: // value for 'chatName'
 *      companionUserId: // value for 'companionUserId'
 *   },
 * });
 */
export function useCreateChatMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatMutation, CreateChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChatMutation, CreateChatMutationVariables>(CreateChatDocument, options);
      }
export type CreateChatMutationHookResult = ReturnType<typeof useCreateChatMutation>;
export type CreateChatMutationResult = Apollo.MutationResult<CreateChatMutation>;
export type CreateChatMutationOptions = Apollo.BaseMutationOptions<CreateChatMutation, CreateChatMutationVariables>;