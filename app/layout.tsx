import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata: Metadata = {
  title: "ADAS Education",
  description: "ADAS Education home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo(white-mobile).svg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_forward"
        />
      </head>

      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
