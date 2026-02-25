import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nova Tax Advisory",
    template: "%s | Nova Tax Advisory",
  },
  description:
    "Nova Tax Advisory provides expert accounting, tax planning, compliance, and business advisory services.",
  keywords: [
    "Tax Advisory",
    "Accounting Services",
    "Business Tax",
    "Company Registration",
    "SMSF",
    "Financial Consulting",
  ],
  authors: [{ name: "Nova Tax Advisory" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Nova Tax Advisory",
    description:
      "Professional tax and accounting services tailored for individuals and businesses.",
    url: "https://yourdomain.com",
    siteName: "Nova Tax Advisory",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}