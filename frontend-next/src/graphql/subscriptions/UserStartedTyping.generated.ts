import * as Types from '../../__generated__/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserStartedTypingSubscriptionVariables = Types.Exact<{
  chatId: Types.Scalars['String']['input'];
  userId: Types.Scalars['String']['input'];
}>;


export type UserStartedTypingSubscription = { __typename?: 'Subscription', userStartedTyping?: { __typename?: 'UserResponse', email: string, id: string, name: string, role: Types.Role } | null };


export const UserStartedTypingDocument = gql`
    subscription UserStartedTyping($chatId: String!, $userId: String!) {
  userStartedTyping(chatId: $chatId, userId: $userId) {
    email
    id
    name
    role
  }
}
    `;

/**
 * __useUserStartedTypingSubscription__
 *
 * To run a query within a React component, call `useUserStartedTypingSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserStartedTypingSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserStartedTypingSubscription({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserStartedTypingSubscription(baseOptions: Apollo.SubscriptionHookOptions<UserStartedTypingSubscription, UserStartedTypingSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<UserStartedTypingSubscription, UserStartedTypingSubscriptionVariables>(UserStartedTypingDocument, options);
      }
export type UserStartedTypingSubscriptionHookResult = ReturnType<typeof useUserStartedTypingSubscription>;
export type UserStartedTypingSubscriptionResult = Apollo.SubscriptionResult<UserStartedTypingSubscription>;