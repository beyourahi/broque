"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export const LoginButton = () => (
    <button
        className="flex w-full items-center justify-center space-x-4 rounded-xl border-2 border-slate-200 bg-slate-50 py-4 text-3xl transition-all duration-300 ease-in-out hover:scale-95 active:scale-90"
        onClick={() => signIn("google", { callbackUrl: "/" })}
    >
        <FcGoogle />
    </button>
);
