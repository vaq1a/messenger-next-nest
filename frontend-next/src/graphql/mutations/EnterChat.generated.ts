import * as Types from '../../__generated__/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type EnterChatMutationVariables = Types.Exact<{
  chatId: Types.Scalars['String']['input'];
}>;


export type EnterChatMutation = { __typename?: 'Mutation', enterChat: boolean };


export const EnterChatDocument = gql`
    mutation EnterChat($chatId: String!) {
  enterChat(chatId: $chatId)
}
    `;
export type EnterChatMutationFn = Apollo.MutationFunction<EnterChatMutation, EnterChatMutationVariables>;

/**
 * __useEnterChatMutation__
 *
 * To run a mutation, you first call `useEnterChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnterChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enterChatMutation, { data, loading, error }] = useEnterChatMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useEnterChatMutation(baseOptions?: Apollo.MutationHookOptions<EnterChatMutation, EnterChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnterChatMutation, EnterChatMutationVariables>(EnterChatDocument, options);
      }
export type EnterChatMutationHookResult = ReturnType<typeof useEnterChatMutation>;
export type EnterChatMutationResult = Apollo.MutationResult<EnterChatMutation>;
export type EnterChatMutationOptions = Apollo.BaseMutationOptions<EnterChatMutation, EnterChatMutationVariables>;