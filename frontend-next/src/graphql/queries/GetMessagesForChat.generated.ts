import * as Types from '../../__generated__/types.generated';

import { gql } from '@apollo/client';
import { MessageFragmentDoc } from '../fragments/Message.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetMessagesForChatQueryVariables = Types.Exact<{
  chatId: Types.Scalars['String']['input'];
}>;


export type GetMessagesForChatQuery = { __typename?: 'Query', getMessagesForChat: Array<{ __typename?: 'Message', id: string, authorId: string, chatId: string, text: string, author: { __typename?: 'User', id: string, name: string, email: string }, chat: { __typename?: 'Chat', id: string, name: string, authorId: string } }> };


export const GetMessagesForChatDocument = gql`
    query GetMessagesForChat($chatId: String!) {
  getMessagesForChat(chatId: $chatId) {
    ...Message
  }
}
    ${MessageFragmentDoc}`;

/**
 * __useGetMessagesForChatQuery__
 *
 * To run a query within a React component, call `useGetMessagesForChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesForChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesForChatQuery({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useGetMessagesForChatQuery(baseOptions: Apollo.QueryHookOptions<GetMessagesForChatQuery, GetMessagesForChatQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesForChatQuery, GetMessagesForChatQueryVariables>(GetMessagesForChatDocument, options);
      }
export function useGetMessagesForChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesForChatQuery, GetMessagesForChatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesForChatQuery, GetMessagesForChatQueryVariables>(GetMessagesForChatDocument, options);
        }
export function useGetMessagesForChatSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMessagesForChatQuery, GetMessagesForChatQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMessagesForChatQuery, GetMessagesForChatQueryVariables>(GetMessagesForChatDocument, options);
        }
export type GetMessagesForChatQueryHookResult = ReturnType<typeof useGetMessagesForChatQuery>;
export type GetMessagesForChatLazyQueryHookResult = ReturnType<typeof useGetMessagesForChatLazyQuery>;
export type GetMessagesForChatSuspenseQueryHookResult = ReturnType<typeof useGetMessagesForChatSuspenseQuery>;
export type GetMessagesForChatQueryResult = Apollo.QueryResult<GetMessagesForChatQuery, GetMessagesForChatQueryVariables>;