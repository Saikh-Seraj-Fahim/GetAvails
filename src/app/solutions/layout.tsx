import type { Metadata } from "next";
import NavBar from "@/myComponents/NavBar";
import Footer from "@/myComponents/footer";

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default function SolutionsLayout({
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
