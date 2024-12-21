import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/sticky/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Optimus Detailing",
  description: "Optimus detailing",
  icons: {
    icon: "/logo.jpg", // Add favicon using the Metadata API
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
