import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { Session } from "next-auth";
import { UserInfo } from "@/components/user-info";
import { SignOutButton } from "@/components/sign-out-button";

interface Props {
    session: Session;
}

export const MobileMenu = ({ session }: Props) => (
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

        <DrawerContent className="border-0">
            <div className="flex flex-col gap-6 px-4 py-8">
                <UserInfo session={session} />
                <SignOutButton />
            </div>
        </DrawerContent>
    </Drawer>
);
