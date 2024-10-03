import type { Metadata } from "next";
import { Hubballi } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import clsx from "clsx";

const huballi = Hubballi({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-huballi",
});

export const metadata: Metadata = {
  title: "asiewe",
  description: "Armel Siewe Portofolio website",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(huballi.variable, "h-screen")}>
        <Header />
        <section className="container mx-auto py-8 md:py-0">{children}</section>
      </body>
    </html>
  );
}
