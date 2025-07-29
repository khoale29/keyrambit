import "./globals.css";
import { Lavishly_Yours, Montserrat } from "next/font/google";

import Head from "next/head";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-montserrat",
});
const lavishlyYours = Lavishly_Yours({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lavishly-yours",
  display: "swap",
});

export const metadata = {
  title: "Keyrambitvn | Móc Khóa Độc Đáo – Quà Tặng Quốc Khánh 2/9",
  description:
    "Khám phá bộ sưu tập móc khóa độc đáo tại Keyrambitvn. Ưu đãi đặc biệt nhân dịp Quốc Khánh 2/9 – quà tặng móc khóa ý nghĩa cho bạn bè và người thân.",
  keywords:
    "móc khóa Keyrambitvn, móc khóa 2/9, móc khóa độc đáo, quà tặng Quốc Khánh, móc khóa Việt Nam",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Keyrambitvn | Móc Khóa Độc Đáo – Quà Tặng Quốc Khánh 2/9",
    description:
      "Khám phá bộ sưu tập móc khóa độc đáo của Keyrambitvn, ưu đãi nhân ngày Quốc Khánh 2/9.",
    url: "https://keyrambitvn.com",
    siteName: "Keyrambitvn",
    images: [
      {
        url: "https://keyrambitvn.com/Logo_header.webp",
        alt: "Keyrambitvn móc khóa độc đáo cho Quốc Khánh 2/9",
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
      lang="vi"
      className={`${lavishlyYours.variable} ${montserrat.variable}`}
    >
      <Head>
        {/* Title & Meta cơ bản */}
        <title>
          Keyrambitvn | Móc Khóa Độc Đáo – Quà Tặng Quốc Khánh 2/9
        </title>
        <meta
          name="description"
          content="Khám phá bộ sưu tập móc khóa độc đáo tại Keyrambitvn. Ưu đãi đặc biệt dịp Quốc Khánh 2/9 – quà tặng móc khóa ý nghĩa cho bạn bè và người thân."
        />
        <meta
          name="keywords"
          content="móc khóa Keyrambitvn, móc khóa ngày lễ, móc khóa độc đáo, quà tặng 2/9, móc khóa Quốc Khánh"
        />
        <meta property="og:title" content="Keyrambitvn | Móc Khóa Độc Đáo – Quà Tặng Quốc Khánh 2/9" />
        <meta
          property="og:description"
          content="Khám phá bộ sưu tập móc khóa độc đáo của Keyrambitvn, ưu đãi nhân ngày Quốc Khánh 2/9."
        />
        <meta property="og:image" content="https://keyrambitvn.com/Logo_header.webp" />
        <meta property="og:url" content="https://keyrambitvn.com" />
        <meta property="og:type" content="website" />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">{children}</body>

      {/* JSON-LD Structured Data cho Store & Event */}
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
              "Keyrambitvn – cửa hàng móc khóa độc đáo dành cho giới trẻ, thiết kế lấy cảm hứng từ game, anime và văn hoá pop. Ưu đãi đặc biệt dịp Quốc Khánh 2/9.",
            keywords:
              "móc khóa Keyrambitvn, móc khóa độc đáo, quà tặng Quốc Khánh, móc khóa 2/9, keyrambitvn, keyrambit, keyrambit Việt Nam",
            address: {
              "@type": "PostalAddress",
              addressCountry: "VN",
            },
            sameAs: [
              "https://www.facebook.com/p/Keyrambitvn-61557955756319/",
              "https://www.tiktok.com/@keyrambitvn.company?lang=en",
              "https://www.instagram.com/keyrambitvnhouse/",
            ],
            event: {
              "@type": "SaleEvent",
              name: "Các sản phẩm Keyrambitvn tại dịp Quốc Khánh 2/9",
              description:
                "Móc khóa độc đáo nhân ngày Quốc Khánh 2/9.",
              startDate: "2024-08-25",
              endDate: "2024-09-05",
              url: "https://keyrambitvn.com",
              location: {
                "@type": "Place",
                name: "Cửa hàng Keyrambitvn",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "391/21 Sư Vạn Hạnh, Phường 12",
                  addressLocality: "Quận 10",
                  addressRegion: "Hồ Chí Minh",
                  addressCountry: "VN",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "Keyrambitvn",
                url: "https://keyrambitvn.com",
              },
              eventStatus: "https://schema.org/EventScheduled",
              image: "https://keyrambitvn.com/images/independence-sale.jpg",
              offers: {
                "@type": "Offer",
                url: "https://keyrambitvn.com",
                priceCurrency: "VND",
                availability: "https://schema.org/InStock",
                validFrom: "2024-08-25",
              },
            },
          }),
        }}
      />
    </html>
  );
}