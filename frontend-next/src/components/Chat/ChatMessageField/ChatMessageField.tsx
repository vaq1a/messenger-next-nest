import styles from './ChatMessageField.module.scss'
import {SendMessageMutation, SendMessageMutationVariables} from "@/graphql/mutations/SendMessage.generated";
import {ApolloCache, DefaultContext, FetchResult, MutationFunctionOptions} from "@apollo/client";

interface IChatMessageField {
    message: string
    sendMessage: (options?: MutationFunctionOptions<SendMessageMutation, SendMessageMutationVariables, DefaultContext, ApolloCache<any>>) => Promise<FetchResult<SendMessageMutation>>
    chatId: string
    setMessage: (value: (((prevState: string) => string) | string)) => void
}

export default function ChatMessageField(
    {
        message,
        sendMessage,
        chatId,
        setMessage,
    }: IChatMessageField
) {
    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                value={message}
                placeholder={'Enter message...'}
                onChange={(e) => (setMessage(e.target.value))}
                onKeyDown={async (e) => {
                    if (e.keyCode === 13 && message) {
                        await sendMessage({
                            variables: {
                                chatId,
                                content: message
                            },
                            onCompleted: () => {
                                setMessage('')
                            },
                        })
                    }
                }}
            />
            <button
                className={styles.button}
                onClick={async () => {
                    if (!message) {
                        return false;
                    }

                    await sendMessage({
                        variables: {
                            chatId,
                            content: message
                        },
                        onCompleted: () => {
                            setMessage('')
                        },
                    })
                }}
            >
                <svg
                    className={styles.icon}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19.983 1.43314L17.483 17.6441C17.444 18.0347 17.2096 18.3863 16.858 18.5816C16.6627 18.6597 16.4674 18.7378 16.233 18.7378C16.0768 18.7378 15.9205 18.6988 15.7643 18.6206L10.9987 16.6285L9.00647 19.5972C8.85022 19.8706 8.57679 19.9878 8.30335 19.9878C7.87366 19.9878 7.5221 19.6363 7.5221 19.2066V15.4566C7.5221 15.1441 7.60022 14.8706 7.75647 14.6753L16.2721 3.73783L4.78772 14.0894L0.764285 12.4097C0.334598 12.2144 0.0220975 11.8238 0.0220975 11.316C-0.016965 10.7691 0.21741 10.3785 0.647098 10.1441L18.1471 0.183143C18.5377 -0.0512317 19.0846 -0.0512317 19.4752 0.222206C19.8658 0.495643 20.0612 0.964393 19.983 1.43314Z"
                        fill="currentColor"/>
                </svg>
            </button>
        </div>
    )
}