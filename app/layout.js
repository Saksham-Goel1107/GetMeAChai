import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar'
import Footer from './components/footer'
import Sessionwrapper from "./components/sessionwrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Chai",
  description: "This website is crowd funding for chai lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Sessionwrapper>
          <Navbar />
          <div className=" h-[83rem] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">

            {children}
          </div>
          <Footer />
        </Sessionwrapper>
      </body>
    </html>
  );
}
