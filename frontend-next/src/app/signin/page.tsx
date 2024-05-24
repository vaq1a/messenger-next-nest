import type { Metadata } from 'next'
import {Auth} from "@/components/Auth/Auth";

export const metadata: Metadata = {
    title: 'Sign In'
}

export default function SignInPage() {
    return (
        <div>
            <Auth type='signIn' />
        </div>
    )
}