import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/store/Provider";
import ToastifyContainer from "@/utils/ToastifyContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campus Placement Portal",
  description: "Sou placment application for students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastifyContainer />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
