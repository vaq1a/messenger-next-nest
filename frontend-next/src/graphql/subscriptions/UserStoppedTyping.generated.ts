import * as Types from '../../__generated__/types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserStoppedTypingSubscriptionVariables = Types.Exact<{
  chatId: Types.Scalars['String']['input'];
  userId: Types.Scalars['String']['input'];
}>;


export type UserStoppedTypingSubscription = { __typename?: 'Subscription', userStoppedTyping?: { __typename?: 'UserResponse', email: string, id: string, name: string, role: Types.Role } | null };


export const UserStoppedTypingDocument = gql`
    subscription UserStoppedTyping($chatId: String!, $userId: String!) {
  userStoppedTyping(chatId: $chatId, userId: $userId) {
    email
    id
    name
    role
  }
}
    `;

/**
 * __useUserStoppedTypingSubscription__
 *
 * To run a query within a React component, call `useUserStoppedTypingSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUserStoppedTypingSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserStoppedTypingSubscription({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserStoppedTypingSubscription(baseOptions: Apollo.SubscriptionHookOptions<UserStoppedTypingSubscription, UserStoppedTypingSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<UserStoppedTypingSubscription, UserStoppedTypingSubscriptionVariables>(UserStoppedTypingDocument, options);
      }
export type UserStoppedTypingSubscriptionHookResult = ReturnType<typeof useUserStoppedTypingSubscription>;
export type UserStoppedTypingSubscriptionResult = Apollo.SubscriptionResult<UserStoppedTypingSubscription>;