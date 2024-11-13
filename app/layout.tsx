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
                "dark flex h-full min-h-[100dvh] flex-col border-border bg-background text-foreground"
            )}
        >
            {children}
        </body>
    </html>
);

export default RootLayout;
