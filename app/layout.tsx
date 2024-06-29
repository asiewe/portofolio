import type { Metadata } from "next";
import { Coda } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const inter = Coda({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "asiewe",
  description: "Armel Siewe Portofolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header></Header>
        <StairTransition></StairTransition>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
