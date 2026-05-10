import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { siteConfig } from "@/lib/site";

const poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["700", "800"] });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto", weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Wow Tex | Premium Digital Experiences",
    template: "%s | Wow Tex"
  },
  description: siteConfig.description,
  openGraph: {
    title: "Wow Tex",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Wow Tex",
    images: [{ url: siteConfig.ogImage }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wow Tex",
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${poppins.variable} ${roboto.variable} bg-bg text-textPrimary antialiased`}>
        <LenisProvider>
          <Navbar />
          <main className="pt-24">{children}</main>
          <Footer />
        </LenisProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Wow Tex",
              url: siteConfig.url,
              sameAs: ["https://www.linkedin.com", "https://www.twitter.com"]
            })
          }}
        />
      </body>
    </html>
  );
}
