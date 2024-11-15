import { Card, CardContent } from "@/components/ui/card";
import { Session } from "next-auth";
import { Logo } from "@/components/logo";
import { DesktopMenu } from "@/components/desktop-menu";
import { MobileMenu } from "@/components/mobile-menu";

export const Navbar = ({ session }: { session: Session }) => (
    <Card className="rounded-xl border-0 bg-gradient-to-r from-zinc-900 via-black/50 to-black drop-shadow-lg backdrop-blur-2xl backdrop-filter">
        <CardContent className="flex items-center justify-between p-4">
            <Logo />
            <DesktopMenu session={session} />
            <MobileMenu session={session} />
        </CardContent>
    </Card>
);
