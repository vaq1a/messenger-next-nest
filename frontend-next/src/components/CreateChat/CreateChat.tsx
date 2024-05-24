'use client';

import CreateChatButton from "@/components/CreateChat/CreateChatButton/CreateChatButton";
import CreateChatModal from "@/components/CreateChat/CreateChatModal/CreateChatModal";
import {useCreateChat} from "@/hooks/useCreateChat";

export default function CreateChat() {
    const {
        isOpen,
        openModal,
        closeModal,
        error,
        createChatHandle,
        setChatName,
        companionUserId,
        setCompanionUserId,
    } = useCreateChat()

    // console.log(Intl.DateTimeFormat('en', {
        // minute: "2-digit",
        // timeStyle: "short",
    // }).format(new Date('2024-02-26T12:11:39.814Z')))

    return (
        <>
            <CreateChatButton openModal={openModal} />
            <CreateChatModal
                isOpen={isOpen}
                closeModal={closeModal}
                error={error}
                createChatHandle={createChatHandle}
                setChatName={setChatName}
                companionUserId={companionUserId}
                setCompanionUserId={setCompanionUserId}
            />
        </>
    )
}