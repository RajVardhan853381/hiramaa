import type { Metadata, Viewport } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

export const viewport: Viewport = {
  themeColor: "#0a3d2e",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hiramaa.com"),
  title: "Hira Maa Group | Green Energy & Environmental Products",
  description: "Hira Maa Group is a diversified organization working across agriculture, horticulture, dairy, renewable energy, and modern farming solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hira Maa Group | Green Energy & Environmental Products",
    description: "A diversified group working across agriculture, dairy, solar energy, and environmental products — rooted in Chhattisgarh since 2018.",
    url: "https://hiramaa.com",
    siteName: "Hira Maa Group",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Hira Maa Group",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hira Maa Group",
    description: "Agriculture, dairy, solar energy and more from Chhattisgarh.",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
