import "./globals.css";
import Header from "@/components/layouts/Header";
import { Source_Sans_3, Raleway } from "next/font/google";
import Footer from "@/components/layouts/Footer";
import "swiper/css";
import "swiper/css/effect-fade";
import { Metadata } from "next";
import ScrollToTop from "@/components/layouts/ScrollToTop";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CÔNG TY CỔ PHẦN XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING",
  other: {
    ["or:title"]: "CÔNG TY CỔ PHẦN XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING",
    ["og:site_name"]: "CÔNG TY CỔ PHẦN XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING",
    ["viewport"]: "width=device-width, initial-scale=1.0",
  },
  description: "CÔNG TY CỔ PHẦN XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING ",
  openGraph: {
    title: "CÔNG TY CỔ PHẦN XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING",
    description: "CÔNG TY CỔ PHẦN XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING ",
    url: "https://vietsing-fe.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=dmlldHNpbmcvbG9nb19zbWFsbC5wbmc=&version_id=null",
        alt: "thumbnailUrl",
        width: 400,
        height: 200,
      },
    ],
    siteName: "CÔNG TY CỔ PHẦN XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={sourceSansPro.variable}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
