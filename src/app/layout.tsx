import type { Metadata } from "next";
import { Amiri, Mulish, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const nastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-nastaliq",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mannat | Deen-e-Nafs",
  description:
    "Noorani Kalemaat aur Rabta-e-Saltanat course — wisdom, meditation, health and music rooted in divine light.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${amiri.variable} ${mulish.variable} ${nastaliq.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-deep text-ivory">
        {children}
      </body>
    </html>
  );
}
