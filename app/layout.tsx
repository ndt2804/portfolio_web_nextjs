import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { PortfolioModeProvider } from "@/components/providers/portfolio-mode-provider";
import LayoutWrapper from "@/components/layout-wrapper";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });

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
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${inter.className} relative min-h-screen`}>
        <PortfolioModeProvider>
          <Header />
          <LayoutWrapper>{children}</LayoutWrapper>
          <Footer />
        </PortfolioModeProvider>
      </body>
    </html>
  );
}
