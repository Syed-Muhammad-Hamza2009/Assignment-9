import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Poppins } from "next/font/google"
import Footer from "@/components/footer/Footer";


const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Data Fetching",
  description: "Data Fetching in a CSR and SSR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} bg-[#0f172a] text-white antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
