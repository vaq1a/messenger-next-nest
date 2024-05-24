'use client';

import {MessageFragment} from "@/graphql/fragments/Message.generated";
import Image from "next/image";
import photo from "@/assets/photo.jpg";
import {classNames} from "@/helpers/classNames";
import {useEffect, useRef} from "react";

import styles from './ChatMessages.module.scss'

interface IChatMessages {
    messages: MessageFragment[]
}

export default function ChatMessages(
    {
        messages,
    }: IChatMessages
) {
    const messagesEndRef = useRef<HTMLDivElement | null>(null)

    const authorId: string = '2ca8e9f3-6b21-4efa-9e28-99d892ab39c6'

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView()
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);

    if (!messages?.length) {
        return (
            <div className={styles.emptyContainer}>
                Empty...
            </div>
        )
    }

    return (
        <div className={styles.container}>
            {
                messages.map((message) => (
                    <div
                        key={message.id}
                        className={classNames(styles.message, authorId === message.authorId && styles.ownMessage)}
                    >
                        <picture className={styles.imageWrapper}>
                            <Image
                                className={styles.image}
                                src={photo}
                                width={40}
                                height={40}
                                alt={''}
                            />
                        </picture>
                        {/*<div className={styles.messages}>*/}
                        <div className={styles.text}>
                            {message.text}
                        </div>
                        {/*</div>*/}
                    </div>
                ))
            }
            <div ref={messagesEndRef}/>
        </div>
    )
}