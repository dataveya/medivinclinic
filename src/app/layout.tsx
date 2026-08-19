import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  src: "./fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

const newsreader = localFont({
  src: "./fonts/newsreader-latin.woff2",
  variable: "--font-newsreader",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medivinclinic.com"),
  title: "Medivin Clinic Nagpur | Women’s, Newborn & Child Care",
  description: "Specialist consultation for women’s health, pregnancy, newborn care and pediatrics at Medivin Clinic in Manish Nagar, Nagpur.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: "/", siteName: "Medivin Clinic",
    title: "Modern care for women, newborns & children.",
    description: "Mother and child care in Manish Nagar, Nagpur.",
    images: [{ url: "/og.png", width: 1730, height: 909, alt: "Medivin Clinic — modern care for women, newborns and children" }],
  },
  twitter: {
    card: "summary_large_image", title: "Medivin Clinic",
    description: "Modern care for women, newborns & children in Manish Nagar, Nagpur.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}><body>{children}</body></html>;
}
