import * as Types from '../../__generated__/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddUsersToChatMutationVariables = Types.Exact<{
  chatId: Types.Scalars['String']['input'];
  userIds: Array<Types.Scalars['String']['input']> | Types.Scalars['String']['input'];
}>;


export type AddUsersToChatMutation = { __typename?: 'Mutation', addUsersToChat: { __typename?: 'Chat', id: string, name: string, author: { __typename?: 'User', id: string, email: string, name: string }, messages?: Array<{ __typename?: 'Message', authorId: string, chatId: string }> | null, participantUsers?: Array<{ __typename?: 'User', id: string, email: string, name: string }> | null } };


export const AddUsersToChatDocument = gql`
    mutation AddUsersToChat($chatId: String!, $userIds: [String!]!) {
  addUsersToChat(chatId: $chatId, userIds: $userIds) {
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
export type AddUsersToChatMutationFn = Apollo.MutationFunction<AddUsersToChatMutation, AddUsersToChatMutationVariables>;

/**
 * __useAddUsersToChatMutation__
 *
 * To run a mutation, you first call `useAddUsersToChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUsersToChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUsersToChatMutation, { data, loading, error }] = useAddUsersToChatMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      userIds: // value for 'userIds'
 *   },
 * });
 */
export function useAddUsersToChatMutation(baseOptions?: Apollo.MutationHookOptions<AddUsersToChatMutation, AddUsersToChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUsersToChatMutation, AddUsersToChatMutationVariables>(AddUsersToChatDocument, options);
      }
export type AddUsersToChatMutationHookResult = ReturnType<typeof useAddUsersToChatMutation>;
export type AddUsersToChatMutationResult = Apollo.MutationResult<AddUsersToChatMutation>;
export type AddUsersToChatMutationOptions = Apollo.BaseMutationOptions<AddUsersToChatMutation, AddUsersToChatMutationVariables>;