import "./globals.css";
import { PropsWithChildren } from "react";
import { Providers } from "./providers";

export const metadata = {
    title: "Broke Af",
    description: "Money Tracker"
};

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en" className="scroll-smooth bg-black text-white">
        <body>
            <Providers>{children}</Providers>
        </body>
    </html>
);

export default RootLayout;
