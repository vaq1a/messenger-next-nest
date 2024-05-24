import * as Types from '../../__generated__/types.generated';

import { gql } from '@apollo/client';
import { MessageFragmentDoc } from '../fragments/Message.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NewMessageSubscriptionVariables = Types.Exact<{
  chatId: Types.Scalars['String']['input'];
}>;


export type NewMessageSubscription = { __typename?: 'Subscription', newMessage?: { __typename?: 'Message', id: string, authorId: string, chatId: string, text: string, author: { __typename?: 'User', id: string, name: string, email: string }, chat: { __typename?: 'Chat', id: string, name: string, authorId: string } } | null };


export const NewMessageDocument = gql`
    subscription NewMessage($chatId: String!) {
  newMessage(chatId: $chatId) {
    ...Message
  }
}
    ${MessageFragmentDoc}`;

/**
 * __useNewMessageSubscription__
 *
 * To run a query within a React component, call `useNewMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewMessageSubscription({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useNewMessageSubscription(baseOptions: Apollo.SubscriptionHookOptions<NewMessageSubscription, NewMessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewMessageSubscription, NewMessageSubscriptionVariables>(NewMessageDocument, options);
      }
export type NewMessageSubscriptionHookResult = ReturnType<typeof useNewMessageSubscription>;
export type NewMessageSubscriptionResult = Apollo.SubscriptionResult<NewMessageSubscription>;