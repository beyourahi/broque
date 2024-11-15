import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { Session } from "next-auth";
import { UserInfo } from "@/components/user-info";
import { LogOutButton } from "@/components/log-out-button";
import { logout } from "@/actions/logout";

export const MobileMenu = ({ session }: { session: Session }) => (
    <div className="lg:hidden">
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="border-0 bg-white/5 text-white/80 hover:bg-white/10 lg:hidden"
                >
                    <Menu className="h-5 w-5" />
                </Button>
            </DrawerTrigger>

            <DrawerContent className="border-0 bg-zinc-900">
                <DrawerTitle className="sr-only">Menu</DrawerTitle>

                <div className="flex flex-col gap-6 px-4 py-8">
                    <UserInfo session={session} />

                    <form action={logout}>
                        <LogOutButton />
                    </form>
                </div>
            </DrawerContent>
        </Drawer>
    </div>
);
