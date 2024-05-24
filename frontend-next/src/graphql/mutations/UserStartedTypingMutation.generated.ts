import * as Types from '../../__generated__/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserStartedTypingMutationMutationVariables = Types.Exact<{
  chatId: Types.Scalars['String']['input'];
}>;


export type UserStartedTypingMutationMutation = { __typename?: 'Mutation', userStartedTypingMutation: { __typename?: 'UserResponse', email: string, id: string, name: string, role: Types.Role } };


export const UserStartedTypingMutationDocument = gql`
    mutation UserStartedTypingMutation($chatId: String!) {
  userStartedTypingMutation(chatId: $chatId) {
    email
    id
    name
    role
  }
}
    `;
export type UserStartedTypingMutationMutationFn = Apollo.MutationFunction<UserStartedTypingMutationMutation, UserStartedTypingMutationMutationVariables>;

/**
 * __useUserStartedTypingMutationMutation__
 *
 * To run a mutation, you first call `useUserStartedTypingMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserStartedTypingMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userStartedTypingMutationMutation, { data, loading, error }] = useUserStartedTypingMutationMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useUserStartedTypingMutationMutation(baseOptions?: Apollo.MutationHookOptions<UserStartedTypingMutationMutation, UserStartedTypingMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserStartedTypingMutationMutation, UserStartedTypingMutationMutationVariables>(UserStartedTypingMutationDocument, options);
      }
export type UserStartedTypingMutationMutationHookResult = ReturnType<typeof useUserStartedTypingMutationMutation>;
export type UserStartedTypingMutationMutationResult = Apollo.MutationResult<UserStartedTypingMutationMutation>;
export type UserStartedTypingMutationMutationOptions = Apollo.BaseMutationOptions<UserStartedTypingMutationMutation, UserStartedTypingMutationMutationVariables>;