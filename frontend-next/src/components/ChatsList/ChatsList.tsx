'use client'

import { useGetChatsForUserQuery } from "@/graphql/queries/GetChatsForUser.generated";
import ChatsListHeader from "@/components/ChatsList/ChatsListHeader/ChatsListHeader";
import ChatsListCard from "@/components/ChatsList/ChatsListCard/ChatsListCard";
import {MessageFragment} from "@/graphql/fragments/Message.generated";
import {classNames} from "@/helpers/classNames";

import styles from './ChatsList.module.scss'

export default function ChatsList() {
    const { data, loading } = useGetChatsForUserQuery();

    if (!data && loading) {
        return (
            <div className={classNames(styles.container, styles.containerIndent)}>
                Loading...
            </div>
        )
    }

    if (!data?.getChatsForUser?.length) {
        return (
            <div className={classNames(styles.container, styles.containerIndent)}>
                Chats are empty...
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <ChatsListHeader />
            <div className={styles.list}>
                {
                    data.getChatsForUser.map(({ id, name, messages }) => {
                        const message = messages?.at(-1) as MessageFragment | undefined;

                        return (
                            <ChatsListCard
                                key={id}
                                chatId={id}
                                author={name}
                                message={message?.text}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}