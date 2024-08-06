import type { Metadata } from "next";
import { Hubballi } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import clsx from "clsx";

const inter = Hubballi({
  weight: ["400"],
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
        <section className="container mx-auto">{children}</section>
        {/* </PageTransition> */}
      </body>
    </html>
  );
}
