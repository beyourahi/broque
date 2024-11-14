import "./globals.css";
import { PropsWithChildren } from "react";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { brand } from "@/data";

export const experimental_ppr = true;

export const metadata = {
    title: brand.name,
    description: brand.description
};

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en">
        <body
            className={cn(GeistSans.className, "dark border-border bg-background text-foreground")}
        >
            <div data-vaul-drawer-wrapper>
                <div className="flex h-full min-h-[100dvh] flex-col bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
                    {children}
                </div>
            </div>
        </body>
    </html>
);

export default RootLayout;
