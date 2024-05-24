import * as Types from '../../__generated__/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetChatsForUserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetChatsForUserQuery = { __typename?: 'Query', getChatsForUser: Array<{ __typename?: 'Chat', id: string, name: string, author: { __typename?: 'User', id: string, name: string, email: string }, participantUsers?: Array<{ __typename?: 'User', id: string, name: string, email: string }> | null, messages?: Array<{ __typename?: 'Message', id: string, authorId: string, chatId: string, text: string }> | null }> };


export const GetChatsForUserDocument = gql`
    query GetChatsForUser {
  getChatsForUser {
    id
    name
    author {
      id
      name
      email
    }
    participantUsers {
      id
      name
      email
    }
    messages {
      id
      authorId
      chatId
      text
    }
  }
}
    `;

/**
 * __useGetChatsForUserQuery__
 *
 * To run a query within a React component, call `useGetChatsForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatsForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatsForUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChatsForUserQuery(baseOptions?: Apollo.QueryHookOptions<GetChatsForUserQuery, GetChatsForUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatsForUserQuery, GetChatsForUserQueryVariables>(GetChatsForUserDocument, options);
      }
export function useGetChatsForUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatsForUserQuery, GetChatsForUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatsForUserQuery, GetChatsForUserQueryVariables>(GetChatsForUserDocument, options);
        }
export function useGetChatsForUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetChatsForUserQuery, GetChatsForUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetChatsForUserQuery, GetChatsForUserQueryVariables>(GetChatsForUserDocument, options);
        }
export type GetChatsForUserQueryHookResult = ReturnType<typeof useGetChatsForUserQuery>;
export type GetChatsForUserLazyQueryHookResult = ReturnType<typeof useGetChatsForUserLazyQuery>;
export type GetChatsForUserSuspenseQueryHookResult = ReturnType<typeof useGetChatsForUserSuspenseQuery>;
export type GetChatsForUserQueryResult = Apollo.QueryResult<GetChatsForUserQuery, GetChatsForUserQueryVariables>;