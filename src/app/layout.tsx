import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: "100"
});

export const metadata: Metadata = {
  title: {
    template: "%s | Product Roadmap",
    default: "Product Roadmap"
  },
  description: "Follow the development progress of our entire platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppinsSans.variable} h-full antialiased`}
    >
      <body className="bg-navy-950 text-navy-50 antialiased">
        <NuqsAdapter>
          {children}
        </NuqsAdapter>
      </body>
    </html>
  );
}
