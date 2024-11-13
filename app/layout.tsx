import "./globals.css";
import { PropsWithChildren } from "react";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";

export const metadata = {
    title: "Broke Af",
    description: "Money Tracker"
};

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en">
        <body
            className={cn(
                GeistSans.className,
                "dark border-border bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-foreground"
            )}
        >
            <div vaul-drawer-wrapper="">
                <div className="flex h-full min-h-[100dvh] flex-col">{children}</div>
            </div>
        </body>
    </html>
);

export default RootLayout;
