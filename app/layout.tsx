import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import clsx from "clsx";

const inter = JetBrains_Mono({
  weight: ["500"],
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
      <body className={clsx(inter.variable, "h-screen")}>
        <Header></Header>
        {/* <StairTransition></StairTransition> */}
        {/* <PageTransition> */}
        <section className="container mx-auto h-full mt-10">{children}</section>
        {/* </PageTransition> */}
      </body>
    </html>
  );
}
