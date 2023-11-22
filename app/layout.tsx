import "./globals.css";
import { PropsWithChildren } from "react";

export const metadata = {
    title: "Broke Af",
    description: "Money Tracker"
};

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en" className="scroll-smooth bg-black text-white">
        <body>{children}</body>
    </html>
);

export default RootLayout;
