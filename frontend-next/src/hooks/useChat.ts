import {useEffect, useState} from "react";
import {MessageFragment} from "@/graphql/fragments/Message.generated";
import {useSendMessageMutation} from "@/graphql/mutations/SendMessage.generated";
import {useNewMessageSubscription} from "@/graphql/subscriptions/NewMessage.generated";
import {useGetChatQuery} from "@/graphql/queries/GetChat.generated";
import {useEnterChatMutation} from "@/graphql/mutations/EnterChat.generated";
import {useLeaveChatMutation} from "@/graphql/mutations/LeaveChat.generated";

export const useChat = (chatId: string) => {
    const baseOptionsData = {
        variables: {
            chatId,
        }
    }
    const [message, setMessage] = useState<string>('')
    const [messages, setMessages] = useState<MessageFragment[] | []>([])

    const { data: newMessage, loading: newMessageLoading } = useNewMessageSubscription(baseOptionsData)

    const [sendMessage] = useSendMessageMutation()

    const { data } = useGetChatQuery(baseOptionsData)
    const [enterChat] = useEnterChatMutation(baseOptionsData)
    const [leaveChat] = useLeaveChatMutation(baseOptionsData)

    const currentChat = data?.getChat
    const currentChatName = data?.getChat?.name
    const allMessages = currentChat?.messages as MessageFragment[] | undefined
    const currentCompanion = currentChat?.participantUsers?.[0]

    useEffect(() => {
        if (!!allMessages?.length) {
            setMessages([...allMessages])
        }
    }, [allMessages])

    useEffect(() => {
        if (newMessage?.newMessage) {
            setMessages(data => [...data, newMessage.newMessage as MessageFragment])
        }
    }, [newMessage?.newMessage]);

    useEffect(() => {
        enterChat({
            variables: {
                chatId,
            }
        })

        return () => {
            leaveChat({
                variables: {
                    chatId,
                }
            })
        }
    }, [chatId, enterChat, leaveChat]);

    return {
        currentChatName,
        messages,
        message,
        setMessage,
        sendMessage,
        currentCompanion,
    }
}