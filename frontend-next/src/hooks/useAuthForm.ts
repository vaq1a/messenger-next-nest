import {useSignUpMutation} from "@/graphql/mutations/SignUp.generated";
import {useSignInMutation} from "@/graphql/mutations/SignIn.generated";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";

type SignInValues = {
    username?: string;
    email: string;
    password: string;
};

type SignUpValues = {
    username: string;
    email: string;
    password: string;
};

export const useAuthForm = (isSignUpPage: boolean) => {
    const [signUp] = useSignUpMutation()
    const [signIn] = useSignInMutation()
    const router = useRouter()

    const onFinish = async (values: SignInValues | SignUpValues) => {
        const { username, email, password } = values

        if (isSignUpPage) {
            await signUp({
                variables: {
                    data: {
                        name: username ?? '',
                        email,
                        password,
                    }
                },
                onError: (error) => {
                    console.log('sign up error', error)
                },
                onCompleted: (data)=> {
                    router.push('/signin');
                }
            });

            return;
        }

        await signIn({
            variables: {
                data: {
                    email,
                    password,
                }
            },
            onError: (error) => {
                console.log('sign in error', error)
            },
            onCompleted: ({ signIn })=> {
                Cookies.set('at', signIn.accessToken, {
                    domain: 'localhost',
                    sameSite: "strict",
                    secure: false,
                    expires: new Date(Date.now() + 1800000),
                });

                router.push('/auth/chats');
            }
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return {
        onFinish,
        onFinishFailed,
    }
}