"use client";

import { LoginButton } from "components/LoginButton";

const Login = () => (
    <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex w-full max-w-sm flex-col items-center space-y-6 px-12">
            <h2 className="text-2xl sm:text-3xl">
                <span className="font-black text-white">One click login</span> <br />
            </h2>

            <LoginButton />
        </div>
    </div>
);

export default Login;
