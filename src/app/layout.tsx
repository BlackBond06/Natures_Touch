// import { Suspense } from "react";
import c from "classnames";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from '../components/Navbar/Navbar';
// import { Loader } from '../components/Loader/Loader'
const open_Sans = Open_Sans({ 
  subsets: ["latin"],
  weight: ['300', '500'],
});

export const metadata: Metadata = {
  title: "Natures Touch",
  description: "E-commerce website for all bespoke tailoring needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={c(
          open_Sans.className,
          "dark:bg-[#0e0e1c]"
        )}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
