import * as Types from '../../__generated__/types.generated';

import { gql } from '@apollo/client';
export type MessageFragment = { __typename?: 'Message', id: string, authorId: string, chatId: string, text: string, author: { __typename?: 'User', id: string, name: string, email: string }, chat: { __typename?: 'Chat', id: string, name: string, authorId: string } };

export const MessageFragmentDoc = gql`
    fragment Message on Message {
  id
  authorId
  chatId
  text
  author {
    id
    name
    email
  }
  chat {
    id
    name
    authorId
  }
}
    `;