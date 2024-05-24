'use client'

import {Button , Form, Input} from "antd";
import Password from "antd/lib/input/Password";
import Item from "antd/lib/form/FormItem";
import {useAuthForm} from "@/hooks/useAuthForm";

type FieldType = {
    username: string;
    email: string;
    password: string;
};

interface IAuthForm {
    isSignUpPage: boolean
}

export function AuthForm(
    {
        isSignUpPage,
    }: IAuthForm
) {
    const {
        onFinish,
        onFinishFailed
    } = useAuthForm(isSignUpPage)

    return (
        <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="w-1/4"
        >
            {
                isSignUpPage && (
                    <Item<FieldType>
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="Username" />
                    </Item>
                )
            }

            <Item<FieldType>
                name="email"
                rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
            >
                <Input placeholder="Email" />
            </Item>

            <Item<FieldType>
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Password placeholder="Password" />
            </Item>

            <Button
                type="primary"
                htmlType="submit"
                block
            >
                Submit
            </Button>
        </Form>
    )
}
