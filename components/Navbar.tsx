import { Brand } from "./Brand";
import { LogoutButton } from "./LogoutButton";
import { UserIcon } from "./UserIcon";

export const Navbar = () => (
    <div className="flex h-20 items-center justify-between">
        <Brand />
        <div className="flex items-center gap-6">
            <UserIcon />
            <LogoutButton />
        </div>
    </div>
);
