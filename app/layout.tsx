import "./globals.css";
import { Roboto } from "@next/font/google";
import { LayoutProps } from "@/types";

////! If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

const RootLayout = ({ children }: LayoutProps) => (
    <html lang="en">
        <head />
        <body className={`${roboto.className} bg-black text-white`}>
            {children}
        </body>
    </html>
);

export default RootLayout;
