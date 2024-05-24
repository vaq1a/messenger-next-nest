import Image from "next/image";
import photo from '@/assets/photo.jpg'
import {classNames} from "@/helpers/classNames";
import ChatSettings from "@/components/Chat/ChatSettings/ChatSettings";
import {useLiveUsersInChatSubscription} from "@/graphql/subscriptions/LiveUsers.generated";

import styles from './ChatHeader.module.scss'

interface IChatHeader {
    chatId: string
    chatName?: string
    currentCompanion?: {
        id: string
        name: string
    }
}

export default function ChatHeader(
    {
        chatId,
        chatName,
        currentCompanion,
    }: IChatHeader
) {
    const companionName = currentCompanion?.name

    const { data } = useLiveUsersInChatSubscription({
        variables: {
            chatId,
        }
    })

    const isActive: boolean = !!data?.liveUsersInChat?.find(({ id }) => id === currentCompanion?.id)

    return (
        <div className={styles.wrapper}>
            {
                companionName && (
                    <picture className={styles.imageWrapper}>
                        <Image
                            className={styles.image}
                            src={photo}
                            width={40}
                            height={40}
                            alt={''}
                        />
                    </picture>
                )
            }
            <div className={styles.info}>
                <div className={styles.username}>
                    {companionName || chatName}
                </div>
                {
                    companionName && (
                        <div className={classNames(styles.status, isActive ? styles.online : styles.offline)}>
                            {
                                isActive ? 'Online' : 'Offline'
                            }
                        </div>
                    )
                }
            </div>
            <ChatSettings chatId={chatId}/>
        </div>
    )
}