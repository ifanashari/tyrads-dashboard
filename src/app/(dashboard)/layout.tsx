import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import "react-responsive-modal/styles.css";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./layout-admin.module.css";
import Highlight from "@/components/Highlight/Highlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TyrAds Dashboard",
  description: "Dashboard Slicing Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className={styles.adminContent}>{children}</div>
        <Highlight />
      </body>
    </html>
  );
}
