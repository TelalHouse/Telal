import type { Metadata } from "next";

// Default metadata for the website
export const defaultMetadata: Metadata = {
  title: {
    default: "بيت التلال للمقاولات - متخصصون في البناء الحديث",
    template: "%s | بيت التلال للمقاولات",
  },
  description: "شركة رائدة في مجال البناء الحديث والمباني الجاهزة في المملكة العربية السعودية منذ 2019",
  keywords: [
    "بيت التلال للمقاولات",
    "مقاولات",
    "بناء حديث",
    "مباني جاهزة",
    "مساجد جاهزة",
    "هياكل معدنية",
    "مظلات",
    "وحدات متنقلة",
    "مقاولات سعودية",
  ],
  authors: [{ name: "بيت التلال للمقاولات" }],
  creator: "بيت التلال للمقاولات",
  publisher: "بيت التلال للمقاولات",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.altelal-house.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "بيت التلال للمقاولات - متخصصون في البناء الحديث",
    description: "شركة رائدة في مجال البناء الحديث والمباني الجاهزة في المملكة العربية السعودية منذ 2019",
    url: "https://www.altelal-house.com",
    siteName: "بيت التلال للمقاولات",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 600,
        alt: "شعار بيت التلال للمقاولات",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "بيت التلال للمقاولات - متخصصون في البناء الحديث",
    description: "شركة رائدة في مجال البناء الحديث والمباني الجاهزة في المملكة العربية السعودية منذ 2019",
    images: ["/images/logo.jpeg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual code when available
  },
  category: "construction",
};

// Page-specific metadata generator
export function generateMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | بيت التلال للمقاولات`,
      description,
      url: `https://www.altelal-house.com${path}`,
      siteName: "بيت التلال للمقاولات",
      images: [
        {
          url: "/images/logo.jpeg",
          width: 800,
          height: 600,
          alt: "شعار بيت التلال للمقاولات",
        },
      ],
      locale: "ar_SA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | بيت التلال للمقاولات`,
      description,
      images: ["/images/logo.jpeg"],
    },
  };
}
