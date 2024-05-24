'use client'

import {AuthForm} from "@/components/Auth/AuthForm/AuthForm";
import {AuthFormSwitcher} from "@/components/Auth/AuthFormSwitcher/AuthFormSwitcher";

interface IAuth {
    type?: 'signIn' | 'signUp'
}

export function Auth(
    {
        type,
    }: IAuth,
) {
    const isSignUpPage: boolean = type === 'signUp'

    return (
        <div className="flex items-center justify-center flex-col h-screen gap-4">
            <AuthForm
                isSignUpPage={isSignUpPage}
            />
            <AuthFormSwitcher isSignUpPage={isSignUpPage}/>
        </div>
    )
}
