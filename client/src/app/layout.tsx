import FooterView from "@/components/Footer-view";
import NavbarView from "@/modules/navbar/client/views/navbar-views";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UrbanBasket",
  description: "UrbanBasket - Modern E-commerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        <div className="min-h-screen p-2">
          <NavbarView />
          <main className="flex flex-col flex-1 mt-4 mx-auto w-full px-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            {children}
            <FooterView />
          </main>
        </div>
      </body>
    </html>
  );
}
