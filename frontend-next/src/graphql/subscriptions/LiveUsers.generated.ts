import * as Types from '../../__generated__/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type LiveUsersInChatSubscriptionVariables = Types.Exact<{
  chatId: Types.Scalars['String']['input'];
}>;


export type LiveUsersInChatSubscription = { __typename?: 'Subscription', liveUsersInChat?: Array<{ __typename?: 'User', id: string, name: string, email: string }> | null };


export const LiveUsersInChatDocument = gql`
    subscription LiveUsersInChat($chatId: String!) {
  liveUsersInChat(chatId: $chatId) {
    id
    name
    email
  }
}
    `;

/**
 * __useLiveUsersInChatSubscription__
 *
 * To run a query within a React component, call `useLiveUsersInChatSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLiveUsersInChatSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiveUsersInChatSubscription({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useLiveUsersInChatSubscription(baseOptions: Apollo.SubscriptionHookOptions<LiveUsersInChatSubscription, LiveUsersInChatSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LiveUsersInChatSubscription, LiveUsersInChatSubscriptionVariables>(LiveUsersInChatDocument, options);
      }
export type LiveUsersInChatSubscriptionHookResult = ReturnType<typeof useLiveUsersInChatSubscription>;
export type LiveUsersInChatSubscriptionResult = Apollo.SubscriptionResult<LiveUsersInChatSubscription>;