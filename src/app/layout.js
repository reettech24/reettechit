import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata ={
  title: "Reet Technologies",
  description: "Reet Technologies is a software development company that specializes in building high-quality web and mobile applications.",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <Header/>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
      <Footer/>
    </html>
    </>
  );
}

