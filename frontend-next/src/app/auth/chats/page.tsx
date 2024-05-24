import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Chats'
}

export default function ChatsPage() {
    return (
        <div className='p-4 font-semibold'>
            Select a chat room on the left side to start chatting!
        </div>
    )
}