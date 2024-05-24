import Link from "next/link";
import photo from '@/assets/photo.jpg'
import Image from "next/image";

import styles from './ChatsListCard.module.scss'

interface IChatsListCard {
    chatId: string
    author: string
    message?: string
    time?: string
}

export default function ChatsListCard(
    {
        chatId,
        author,
        message,
        time,
    }: IChatsListCard,
) {
    return (
        <Link
            className={styles.card}
            href={`/auth/chats/${chatId}`}
        >
            <picture className={styles.imageWrapper}>
                <Image
                    className={styles.image}
                    src={photo}
                    width={48}
                    height={48}
                    alt={''}
                />
            </picture>
            <div>
                <div className={styles.author}>
                    {author}
                </div>
                {
                    message && (
                        <div className={styles.message}>
                            {message}
                        </div>
                    )
                }
            </div>
            <div className={styles.time}>
                {time}
            </div>
        </Link>
    )
}