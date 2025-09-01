import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { dmsans } from "./ui/fonts";
import Header from "./ui/components/Header";

export const metadata: Metadata = {
  title: "Techmania 3.0",
  description: "A website about BSC I.T.'s fest techmania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmsans.className)}>
        <Header />
        {children}
      </body>
    </html>
  );
}
