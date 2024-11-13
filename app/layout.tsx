import "./globals.css";
import { PropsWithChildren } from "react";
import { Providers } from "./providers";

export const metadata = {
    title: "Broke Af",
    description: "Money Tracker"
};

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en">
        <Providers>
            <body className="flex h-full min-h-[100dvh] flex-col border-border bg-background text-foreground">
                {children}
            </body>
        </Providers>
    </html>
);

export default RootLayout;
