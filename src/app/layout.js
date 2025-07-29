// app/layout.js
import "./globals.css";
import { Lavishly_Yours, Montserrat } from "next/font/google";

import Head from "next/head";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"], // Choose the weights you use
  variable: "--font-montserrat", // Optional: to use in Tailwind
});
const lavishlyYours = Lavishly_Yours({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lavishly-yours",
  display: "swap",
});

export const metadata = {
  title: "Keyrambitvn",
  description:
    "Trang web chính thức của KeyrambitVN - Chúng tôi làm đồ chơi, làm keyrambit.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Keyrambitvn – Trang web chính thức của Keyrambitvn",
    description: "Bộ sưu tập mới nhất của Keyrambitvn.",
    url: "https://keyrambitvn.com",
    siteName: "Keyrambitvn",
    images: [
      {
        url: "https://keyrambitvn.com/Logo_header.webp",
        alt: "Keyrambitvn Logo",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lavishlyYours.variable} ${montserrat.variable}`}
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">{children}</body>
      <Script
        id="jsonld-store"
        type="application/ld+json"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "Keyrambitvn",
            url: "https://keyrambitvn.com",
            logo: "https://keyrambitvn.com/logo.png",
            description:
              "Keyrambitvn là cửa hàng chuyên bán móc khóa độc đáo dành cho giới trẻ, với thiết kế lấy cảm hứng từ game, anime và văn hóa pop.",
            address: {
              "@type": "PostalAddress",
              addressCountry: "VN",
            },
            sameAs: [
              "https://www.facebook.com/p/Keyrambitvn-61557955756319/",
              "https://www.tiktok.com/@keyrambitvn.company?lang=en",
              "https://www.instagram.com/keyrambitvnhouse/",
            ],
          }),
        }}
      />
    </html>
  );
}
