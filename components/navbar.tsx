import { Card, CardContent } from "@/components/ui/card";
import { Wallet2 } from "lucide-react";
import { Session } from "next-auth";
import { UserInfo } from "@/components/user-info";
import { SignOutButton } from "@/components/sign-out-button";
import { MobileMenu } from "@/components/mobile-menu";

export const Navbar = ({ session }: { session: Session }) => (
    <Card className="rounded-xl border-0 bg-gradient-to-r from-zinc-900 via-black/50 to-black drop-shadow-lg backdrop-blur-2xl backdrop-filter">
        <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                <div className="rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 p-2 shadow-lg shadow-emerald-500/30 ring-4 ring-emerald-500/10">
                    <Wallet2 className="h-5 w-5 text-white sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-lg font-bold tracking-tight text-white sm:text-xl lg:text-2xl xl:text-3xl">
                        broqué
                    </h1>
                    <span className="hidden text-xs font-medium text-white/50 sm:block lg:text-sm">
                        Tracking my severely underpaid income and pesky expenses
                    </span>
                </div>
            </div>

            <div className="hidden lg:flex lg:items-center">
                <div className="flex items-center divide-x divide-white/10">
                    <div className="pr-8">
                        <UserInfo session={session} />
                    </div>
                    <div className="pl-8">
                        <SignOutButton />
                    </div>
                </div>
            </div>

            <div className="lg:hidden">
                <MobileMenu session={session} />
            </div>
        </CardContent>
    </Card>
);
