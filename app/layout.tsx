import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const bai = Bai_Jamjuree({
  subsets: ["thai"],
  weight: ["300","400","500","600","700"],
});

export const metadata: Metadata = {
  title: "Actifmind",
  description: "ผลิตภัณฑ์เสริมอาหารเพื่อสมาธิและการเรียนรู้",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={`${bai.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}