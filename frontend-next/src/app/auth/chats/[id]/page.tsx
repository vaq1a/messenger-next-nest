import {Metadata} from "next";
import Chat from "@/components/Chat/Chat";

export const metadata: Metadata = {
    title: 'Chat',
}

interface IChatPage {
    params: {
        id: string
    }
}

export default function ChatPage(
    {
        params,
    }: IChatPage
) {
    return (
        <Chat chatId={params.id} />
    )
}
