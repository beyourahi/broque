"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const LoginModal = () => (
    <div className="flex h-screen flex-col items-center justify-center">
        <div className="space-y-6">
            <h2 className="text-left text-xl sm:text-3xl">
                <span className="font-black text-white">One click login</span> <br />
            </h2>

            <div className="flex w-full items-center justify-center space-x-2">
                <button
                    className="flex w-full items-center justify-center space-x-4 rounded-xl border-2 border-slate-200 bg-slate-50 py-4 text-2xl transition-all duration-300 ease-in-out hover:scale-95 active:scale-90 xl:text-3xl"
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                >
                    <FcGoogle />
                </button>
            </div>
        </div>
    </div>
);

export default LoginModal;
