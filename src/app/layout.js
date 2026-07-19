import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import localFont from "next/font/local";
import Footer from "@/components/footer";
import HeaderDesktop from "@/components/headerDesktop";
import { Toaster } from "@/components/ui/sonner"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gambetta = localFont({
  src: [
    {
      path: './fonts/Gambetta-Variable.woff2',
      style: 'normal',
    },
    {
      path: './fonts/Gambetta-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-gambetta',
  display: 'swap',
});

const switzer = localFont({
  src: [
    {
      path: './fonts/Switzer-Variable.woff2',
      style: 'normal',
    },
    {
      path: './fonts/Switzer-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-switzer',
  display: 'swap',
});
export const metadata = {
  title: "HJAMM - Hearts of Jesus & Mary ministries",
  description: "A Place of Prayer, Healing, and Encounter with Christ.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${gambetta.variable} ${switzer.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <>
          <Header />
          <HeaderDesktop />
        </>
        {children}
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
