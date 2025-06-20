import type { Metadata } from "next";
import {Hanken_Grotesk} from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";
import {ModalProvider} from "@/components/ModalProvider";
import Footer from "@/components/Footer";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "nh-test2",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} antialiased`}
      >
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
