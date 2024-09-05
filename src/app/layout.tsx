import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SuperShoe",
    description:
        "SuperShoe is your one-stop shop for the latest and greatest shoes, offering a wide variety of styles, brands, and sizes for every occasion. Step up your footwear game with SuperShoe.",
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/shoes-light.png",
                sizes: "512x512",
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/shoes.png",
                sizes: "512x512",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl mx-auto px-4 flex flex-col justify-between tracking-wide">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
