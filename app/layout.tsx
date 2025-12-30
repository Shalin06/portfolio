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
                    background: "#11071F",
                }}
            >
                <Navigation>{children}</Navigation>
            </body>
        </html>
    );
}
