import * as Types from '../../__generated__/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ExiteFromChatMutationVariables = Types.Exact<{
  chatId: Types.Scalars['String']['input'];
}>;


export type ExiteFromChatMutation = { __typename?: 'Mutation', exiteFromChat: boolean };


export const ExiteFromChatDocument = gql`
    mutation ExiteFromChat($chatId: String!) {
  exiteFromChat(chatId: $chatId)
}
    `;
export type ExiteFromChatMutationFn = Apollo.MutationFunction<ExiteFromChatMutation, ExiteFromChatMutationVariables>;

/**
 * __useExiteFromChatMutation__
 *
 * To run a mutation, you first call `useExiteFromChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExiteFromChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exiteFromChatMutation, { data, loading, error }] = useExiteFromChatMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useExiteFromChatMutation(baseOptions?: Apollo.MutationHookOptions<ExiteFromChatMutation, ExiteFromChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExiteFromChatMutation, ExiteFromChatMutationVariables>(ExiteFromChatDocument, options);
      }
export type ExiteFromChatMutationHookResult = ReturnType<typeof useExiteFromChatMutation>;
export type ExiteFromChatMutationResult = Apollo.MutationResult<ExiteFromChatMutation>;
export type ExiteFromChatMutationOptions = Apollo.BaseMutationOptions<ExiteFromChatMutation, ExiteFromChatMutationVariables>;