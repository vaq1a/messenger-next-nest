import type { Metadata } from 'next'
import {Auth} from "@/components/Auth/Auth";

export const metadata: Metadata = {
    title: 'Sign Up'
}

export default function SignUpPage() {
    return (
        <div>
            <Auth type='signUp' />
        </div>
    )
}