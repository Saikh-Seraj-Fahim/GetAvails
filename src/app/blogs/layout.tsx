import type { Metadata } from "next";
import NavBar from "@/myComponents/Common/NavBar";
import Footer from "@/myComponents/Common/footer";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={``}
            >
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
