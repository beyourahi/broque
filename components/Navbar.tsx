import { Brand } from "./Brand";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { UserIcon } from "./UserIcon";

export const Navbar = () => (
    <div className="flex h-20 items-center justify-between">
        <Brand />
        <div className="flex items-center gap-6">
            <UserIcon />
            <LogoutLink className="transform-gpu rounded-xl bg-red-500 px-7 py-2.5 font-bold transition-all duration-300 ease-in-out hover:bg-red-700">
                Log Out
            </LogoutLink>
        </div>
    </div>
);
