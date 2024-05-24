'use client';

import {Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";
import CreateChatForm from "@/components/CreateChat/CreateChatForm/CreateChatForm";
import CreateChatFormError from "@/components/CreateChat/CreateChatFormError/CreateChatFormError";

interface ICreateChatModal {
    isOpen: boolean,
    closeModal: (value: boolean) => void,
    error: boolean,
    createChatHandle: () => Promise<void>,
    setChatName: (value: string) => void,
    companionUserId: string,
    setCompanionUserId: (value: string) => void,
}

export default function CreateChatModal(
    {
        isOpen,
        closeModal,
        error,
        createChatHandle,
        setChatName,
        companionUserId,
        setCompanionUserId,

    }: ICreateChatModal
) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg text-center font-medium leading-6 text-gray-900"
                                >
                                    Create chat
                                </Dialog.Title>
                                <CreateChatForm
                                    setChatName={setChatName}
                                    setCompanionUserId={setCompanionUserId}
                                    companionUserId={companionUserId}
                                />
                                {
                                    error && (
                                        <CreateChatFormError />
                                    )
                                }
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border border-transparent bg-primary px-4 py-2 text-md font-bold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={createChatHandle}
                                    >
                                        Create
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}