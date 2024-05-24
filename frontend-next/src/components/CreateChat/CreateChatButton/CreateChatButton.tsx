import { MouseEventHandler } from "react";

interface ICreateChatButton {
    openModal:  MouseEventHandler<HTMLButtonElement> | undefined
}

export default function CreateChatButton(
    {
        openModal,
    }: ICreateChatButton
) {
    return (
        <button
            onClick={openModal}
            className='flex items-center justify-center rounded-full w-10 h-10 bg-primary shadow-create-button'
        >
                <span className='inline-block w-5 h-5 text-white'>
                    <svg
                        className='block max-w-full max-h-full w-full h-full'
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.125 8.5C17.125 9.20312 16.5391 9.78906 15.875 9.78906H10.25V15.4141C10.25 16.0781 9.66406 16.625 9 16.625C8.29688 16.625 7.75 16.0781 7.75 15.4141V9.78906H2.125C1.42188 9.78906 0.875 9.20312 0.875 8.5C0.875 7.83594 1.42188 7.28906 2.125 7.28906H7.75V1.66406C7.75 0.960938 8.29688 0.375 9 0.375C9.66406 0.375 10.25 0.960938 10.25 1.66406V7.28906H15.875C16.5391 7.25 17.125 7.83594 17.125 8.5Z"
                            fill="currentColor"/>
                    </svg>
                </span>
        </button>
    )
}