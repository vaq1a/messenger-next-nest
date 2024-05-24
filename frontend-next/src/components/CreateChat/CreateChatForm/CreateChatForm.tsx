'use client';

import {RadioGroup} from "@headlessui/react";
import {classNames} from "@/helpers/classNames";
import {useGetAllUsersQuery} from "@/graphql/queries/GetAllUsers.generated";

import styles from './CreateChatForm.module.scss'

interface ICreateChatForm {
    setChatName: (value: string) => void,
    companionUserId: string,
    setCompanionUserId: (value: string) => void,
}

export default function CreateChatForm(
    {
        setChatName,
        companionUserId,
        setCompanionUserId,
    }: ICreateChatForm,
) {
    const { data: allUsers } = useGetAllUsersQuery()

    return (
        <>
            <div className="mt-2">
                <div className='mb-2 font-medium'>
                    Enter chat name:
                </div>
                <input
                    className='w-full p-[8px] border-2 rounded-md'
                    placeholder='For example: First room'
                    onChange={(event) => setChatName(event.target.value)}
                />
            </div>
            <div className='mt-4 mb-2 font-medium'>
                Choose friend:
            </div>
            <div className="mx-auto w-full max-w-md">
                <RadioGroup value={companionUserId} onChange={setCompanionUserId}>
                    {allUsers?.getAllUsers?.map(({id, name}) => (
                        <RadioGroup.Option
                            key={id}
                            value={id}
                            className='rounded-xl'
                        >
                            {({checked}) => (
                                <>
                                    <RadioGroup.Label
                                        as="p"
                                        className={classNames(styles.label, checked && styles.checked)}
                                    >
                                        {name}
                                    </RadioGroup.Label>

                                </>
                            )}
                        </RadioGroup.Option>
                    ))}
                </RadioGroup>
            </div>
        </>
    )
}