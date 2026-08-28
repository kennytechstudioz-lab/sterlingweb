import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
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
    default: "Sterling Harvest | Secure Agricultural Investment Platform",
    template: "%s | Sterling Harvest"
  },
  description: "Sterling Harvest is a world-class sustainable agricultural investment and production company. Secure robust daily compound returns from scalable crop cultivation, agro-commodities distribution, and farm logistics directly through our secure, high-yield digital investment platform.",
  keywords: ["Sterling Harvest", "Agricultural Investment", "Smart Farming Platform", "Daily Yield returns", "Crop Cultivation", "Agro Commodities", "Secure yield platform", "sustainable agriculture", "daily farm returns"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sterling Harvest | Secure Agricultural Investment Platform",
    description: "Sterling Harvest is a world-class sustainable agricultural investment and production company. Secure robust daily compound returns from scalable crop cultivation, agro-commodities distribution, and farm logistics directly through our secure, high-yield digital investment platform.",
    url: "https://deltagreenagro.org",
    siteName: "Sterling Harvest",
    images: [
      {
        url: "/DeltaLogo.png",
        width: 800,
        height: 600,
        alt: "Sterling Harvest",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sterling Harvest | Secure Agricultural Investment Platform",
    description: "Sterling Harvest is a world-class sustainable agricultural investment and production company. Secure robust daily compound returns from scalable crop cultivation, agro-commodities distribution, and farm logistics directly through our secure, high-yield digital investment platform.",
    images: ["/DeltaLogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
