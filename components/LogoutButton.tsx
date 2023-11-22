"use client";

import { signOut } from "next-auth/react";
import { LuLogOut } from "react-icons/lu";

export const LogoutButton = () => (
    <button
        className="flex items-center gap-2 rounded bg-red-500 px-3 py-2 font-bold text-white transition-all duration-300 ease-in-out hover:bg-red-600 sm:px-6"
        onClick={() => signOut({ callbackUrl: "/" })}
    >
        <span className="text-lg">
            <LuLogOut />
        </span>
        <span className="hidden sm:flex">Log out</span>
    </button>
);
