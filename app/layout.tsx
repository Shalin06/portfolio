import "./globals.css";
import Navigation from "./components/Navigation";

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
            </body>
        </html>
    );
}
