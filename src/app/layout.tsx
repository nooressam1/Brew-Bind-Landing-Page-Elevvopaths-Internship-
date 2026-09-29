import type { Metadata } from "next";
import { Lateef, Sorts_Mill_Goudy } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const lateef = Lateef({
  weight: "400",
  subsets: ["arabic", "latin"],
  variable: "--font-lateef",
  display: "swap",
});

const sortsMillGoudy = Sorts_Mill_Goudy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-goudy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brew & Bind | Artisanal Coffee & Curated Books",
  description: "Experience the perfect blend of handcrafted coffee and inspiring reads at Brew & Bind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${lateef.variable} ${sortsMillGoudy.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
