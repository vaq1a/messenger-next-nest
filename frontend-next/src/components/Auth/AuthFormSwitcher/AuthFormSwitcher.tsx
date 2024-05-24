import Link from "next/link";

interface IAuthFormSwitcher {
    isSignUpPage: boolean
}

export function AuthFormSwitcher(
    {
        isSignUpPage,
    }: IAuthFormSwitcher
) {
    return (
        <span>
            {`If you ${isSignUpPage ? "" : "don\'t "}have an account -> `}
            <Link
                href={isSignUpPage ? '/signin' : '/signup'}
                className='border-b border-b-white'
            >
                {isSignUpPage ? 'Sign In' : 'Sign Up'}
            </Link>
        </span>
    )
}
