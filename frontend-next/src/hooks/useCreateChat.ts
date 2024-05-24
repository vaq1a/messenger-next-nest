import {useEffect, useState} from "react";
import {useCreateChatMutation} from "@/graphql/mutations/CreateChat.generated";
import {GetChatsForUserDocument} from "@/graphql/queries/GetChatsForUser.generated";

export const useCreateChat = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [chatName, setChatName] = useState('')
    const [companionUserId, setCompanionUserId] = useState('')
    const [error, setError] = useState(false)

    const [createChatroom] = useCreateChatMutation({
        refetchQueries: () => [{
            query: GetChatsForUserDocument,
        }],
    })

    function closeModal() {
        setIsOpen(false)
        setChatName('')
        setCompanionUserId('')
        setError(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    async function createChatHandle () {
        if (!chatName || !companionUserId) {
            setError(true)

            return
        }

        await createChatroom({
            variables: {
                chatName,
                companionUserId,
            }
        })
        closeModal()
    }

    useEffect(() => {
        if (chatName && companionUserId) {
            setError(false)
        }
    }, [chatName, companionUserId]);


    return {
        isOpen,
        openModal,
        closeModal,
        error,
        createChatHandle,
        setChatName,
        companionUserId,
        setCompanionUserId,
    }
}