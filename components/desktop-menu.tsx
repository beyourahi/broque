import { Session } from "next-auth";
import { UserInfo } from "@/components/user-info";
import { LogOutButton } from "@/components/log-out-button";
import { logout } from "@/actions/logout";

export const DesktopMenu = ({ session }: { session: Session }) => (
    <div className="hidden lg:flex lg:items-center">
        <div className="flex items-center divide-x divide-white/10">
            <UserInfo session={session} className="pr-8" />

            <div className="pl-8">
                <form action={logout}>
                    <LogOutButton />
                </form>
            </div>
        </div>
    </div>
);
