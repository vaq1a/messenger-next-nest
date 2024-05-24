import {useRouter} from "next/navigation";
import {GetChatsForUserDocument} from "@/graphql/queries/GetChatsForUser.generated";
import {useExiteFromChatMutation} from "@/graphql/mutations/ExiteFromChat.generated";

export const useChatSettings = (chatId: string) => {
    const { push } = useRouter();

    const [exiteFromChat] = useExiteFromChatMutation({
        variables: {
            chatId,
        },
        refetchQueries: () => {
            push('/auth/chats')

            return [{
                query: GetChatsForUserDocument,
            }]
        },
    })

    return {
        exiteFromChat,
    }
}