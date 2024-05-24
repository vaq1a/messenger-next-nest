'use client';

import ChatMessages from "@/components/Chat/ChatMessages/ChatMessages";
import ChatMessageField from "@/components/Chat/ChatMessageField/ChatMessageField";
import {useChat} from "@/hooks/useChat";
import ChatHeader from "@/components/Chat/ChatHeader/ChatHeader";

import styles from './Chat.module.scss'

interface IChat {
    chatId: string
}

export default function Chat(
    {
        chatId,
    }: IChat,
) {
    const {
        currentChatName,
        messages,
        message,
        setMessage,
        sendMessage,
        currentCompanion
    } = useChat(chatId)

    return (
        <div className={styles.chat}>
            <ChatHeader
                chatId={chatId}
                currentCompanion={currentCompanion}
                chatName={currentChatName}
            />
            <ChatMessages messages={messages}/>
            <ChatMessageField
                chatId={chatId}
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
            />
        </div>
    )
}