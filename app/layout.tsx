import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RegistrationModalProvider } from "@/contexts/RegistrationModalContext";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "RECYCLE27 — International Conference on Sustainable Waste Management and Circular Economy",
  description: "RECYCLE27 brings together researchers, industry experts, policymakers and students to discuss innovations and solutions for sustainable waste management and circular economy at IIT Guwahati.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable}`}
    >
      <body className="font-body bg-soft-bg text-dark-text min-h-screen flex flex-col">
        <RegistrationModalProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </RegistrationModalProvider>
      </body>
    </html>
  );
}
