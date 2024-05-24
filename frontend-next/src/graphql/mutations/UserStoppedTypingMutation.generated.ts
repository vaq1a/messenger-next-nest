import * as Types from '../../__generated__/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserStoppedTypingMutationMutationVariables = Types.Exact<{
  chatId: Types.Scalars['String']['input'];
}>;


export type UserStoppedTypingMutationMutation = { __typename?: 'Mutation', userStoppedTypingMutation: { __typename?: 'UserResponse', email: string, id: string, name: string, role: Types.Role } };


export const UserStoppedTypingMutationDocument = gql`
    mutation UserStoppedTypingMutation($chatId: String!) {
  userStoppedTypingMutation(chatId: $chatId) {
    email
    id
    name
    role
  }
}
    `;
export type UserStoppedTypingMutationMutationFn = Apollo.MutationFunction<UserStoppedTypingMutationMutation, UserStoppedTypingMutationMutationVariables>;

/**
 * __useUserStoppedTypingMutationMutation__
 *
 * To run a mutation, you first call `useUserStoppedTypingMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserStoppedTypingMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userStoppedTypingMutationMutation, { data, loading, error }] = useUserStoppedTypingMutationMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useUserStoppedTypingMutationMutation(baseOptions?: Apollo.MutationHookOptions<UserStoppedTypingMutationMutation, UserStoppedTypingMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserStoppedTypingMutationMutation, UserStoppedTypingMutationMutationVariables>(UserStoppedTypingMutationDocument, options);
      }
export type UserStoppedTypingMutationMutationHookResult = ReturnType<typeof useUserStoppedTypingMutationMutation>;
export type UserStoppedTypingMutationMutationResult = Apollo.MutationResult<UserStoppedTypingMutationMutation>;
export type UserStoppedTypingMutationMutationOptions = Apollo.BaseMutationOptions<UserStoppedTypingMutationMutation, UserStoppedTypingMutationMutationVariables>;