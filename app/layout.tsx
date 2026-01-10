import "./globals.css";
import Navigation from "./components/Navigation";
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <body
                style={{
                    background: "#030014",
                }}
            >
                <Navigation>{children}</Navigation>
                <Analytics />
            </body>
        </html>
    );
}
