import {Flex} from "antd";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Main Page
            <Flex className='gap-4'>
                <Link href='/signin'>
                    Sign In
                </Link>
                <Link href='/signup'>
                    Sign Up
                </Link>
            </Flex>
        </main>
    );
}
