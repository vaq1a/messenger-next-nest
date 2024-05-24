'use client';

import {Menu, Transition} from '@headlessui/react'
import { Fragment } from 'react'
import {useChatSettings} from "@/hooks/useChatSettings";

import styles from './ChatSettings.module.scss'

interface IChatDirectory {
    chatId: string
}

export default function ChatSettings(
    {
        chatId,
    }: IChatDirectory
) {
    const {
        exiteFromChat,
    } = useChatSettings(chatId)

    return (
        <Menu as="div" className={styles.container}>
            <Menu.Button
                className={styles.trigger}>
                        <span className={styles.iconWrapper}>
                            <svg
                                className={styles.icon}
                                viewBox="0 0 6 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.5 2.5C5.5 1.13281 4.36719 0 3 0C1.59375 0 0.5 1.13281 0.5 2.5C0.5 3.90625 1.59375 5 3 5C4.36719 5 5.5 3.90625 5.5 2.5ZM5.5 10C5.5 8.63281 4.36719 7.5 3 7.5C1.59375 7.5 0.5 8.63281 0.5 10C0.5 11.4062 1.59375 12.5 3 12.5C4.36719 12.5 5.5 11.4062 5.5 10ZM5.5 17.5C5.5 16.1328 4.36719 15 3 15C1.59375 15 0.5 16.1328 0.5 17.5C0.5 18.9062 1.59375 20 3 20C4.36719 20 5.5 18.9062 5.5 17.5Z"
                                    fill="currentColor"/>
                            </svg>
                        </span>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className={styles.items}>
                    <div className="px-1 py-1">
                        <Menu.Item>
                            <button
                                onClick={() => exiteFromChat()}
                                className={styles.item}
                            >
                                Leave chat
                            </button>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
