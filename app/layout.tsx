import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "_tannd | Nguyen Duy Tan",
  description: "Portfolio web built by Nguyen Duy Tan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen`}>
        <div className="absolute inset-0 -z-10 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1.5px)] [background-size:24px_24px]" />
        <Header />
        <main className="flex-grow pl-6 pr-6 max-w-7xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
