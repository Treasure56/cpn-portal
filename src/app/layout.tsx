import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { createMetadata } from "@/functions/metadata";

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = createMetadata({
  title: "Center Point Network | Home",
  description: "Your trusted partner for IT and tech solutions",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
