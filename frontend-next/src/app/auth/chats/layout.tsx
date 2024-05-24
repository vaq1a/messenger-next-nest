import type { Metadata } from 'next'
import ChatsList from "@/components/ChatsList/ChatsList";

export const metadata: Metadata = {
    title: 'Chats',
    description: 'Chats',
}

export default function ChatsLayout(
    {
        children,
    }: {
    children: React.ReactNode
}) {
    return (
        <>
            <ChatsList />
            {children}
        </>
    )
}
