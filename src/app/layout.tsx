import { Tajawal } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "../lib/metadata";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata = defaultMetadata;

// Add proper viewport configuration for mobile devices
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${tajawal.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
