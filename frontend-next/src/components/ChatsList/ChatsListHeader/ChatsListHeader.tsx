import CreateChat from "@/components/CreateChat/CreateChat";

export default function ChatsListHeader() {
    return (
        <div className='flex items-center justify-between py-6 px-8 border-b-[1px] border-[rgba(0,0,0,0.08)]'>
            <div className='text-lg font-semibold text-black'>
                Chats list
            </div>
            <CreateChat />
        </div>
    )
}