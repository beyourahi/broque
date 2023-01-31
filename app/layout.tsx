import "./globals.css";

export const metadata = {
    title: "Broke Af",
    description: "Money Tracker"
};

const RootLayout = ({ children }: ReactChildren) => (
    <html lang="en" className="scroll-smooth bg-black text-white">
        <body>{children}</body>
    </html>
);

export default RootLayout;
