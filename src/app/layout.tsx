import type { Metadata } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono, Noto_Serif_TC } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  weight: ["400", "600"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Lumière 輕衣 | 女士休閒服飾",
  description: "舒適、自在、有質感的女士休閒服飾品牌。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${notoSerifTC.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col overflow-x-clip font-sans">
        {/* 背景柔光，讓玻璃元素有東西可以透 */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="blob absolute -top-40 right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-rose/25 blur-[120px]" />
          <div
            className="blob absolute bottom-[-12rem] left-[-8rem] h-[32rem] w-[32rem] rounded-full bg-lilac/50 blur-[120px]"
            style={{ animationDelay: "-7s" }}
          />
        </div>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
