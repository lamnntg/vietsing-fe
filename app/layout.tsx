import "./globals.css";
import Header from "@/components/layouts/Header";
import { Source_Sans_3, Raleway } from "next/font/google";
import Footer from "@/components/layouts/Footer";
import "swiper/css";
import "swiper/css/effect-fade";
import { Metadata } from "next";
import ScrollToTop from "@/components/layouts/ScrollToTop";
import { GoogleTagManager } from "@next/third-parties/google";
import "swiper/css/pagination";

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
  description:
    "Công Ty Cổ Phần Xây dựng và Thương mại Việt Sing là nhà cung cấp và phân phối các dòng sơn công nghiệp, sơn nội-ngoại thất, các sản phẩm phụ gia cho các công trình xây dựng như vật liệu chống thấm, sơn epoxy, sơn chống thấm, Băng keo chống thấm....",
  keywords:
    "vietsing, viet sing group, vietsing group, thiết bị gym, thi công artwork, thi công phào, sản xuất bảng biển",
  openGraph: {
    title: "CÔNG TY CỔ PHẦN XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING",
    description:
      "Công Ty Cổ Phần Xây dựng và Thương mại Việt Sing là nhà cung cấp và phân phối các dòng sơn công nghiệp, sơn nội-ngoại thất, các sản phẩm phụ gia cho các công trình xây dựng như vật liệu chống thấm, sơn epoxy, sơn chống thấm, Băng keo chống thấm....",
    url: "https://vietsinggroup.com.vn",
    type: "website",
    images: [
      {
        url: "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=dmlldHNpbmcvbG9nb19zbWFsbC5wbmc=&version_id=null",
        alt: "thumbnailUrl",
        width: 400,
        height: 200,
      },
    ],
    siteName: "https://vietsinggroup.com.vn",
  },
  twitter: {
    card: "summary_large_image",
    title: "CÔNG TY CỔ PHẦN XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING",
    description:
      "Công Ty Cổ Phần Xây dựng và Thương mại Việt Sing là nhà cung cấp và phân phối các dòng sơn công nghiệp, sơn nội-ngoại thất, các sản phẩm phụ gia cho các công trình xây dựng như vật liệu chống thấm, sơn epoxy, sơn chống thấm, Băng keo chống thấm....",
    site: "https://vietsinggroup.com.vn",
    images: [
      {
        url: "https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=dmlldHNpbmcvbG9nb19zbWFsbC5wbmc=&version_id=null",
        alt: "thumbnailUrl",
        width: 400,
        height: 200,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <GoogleTagManager gtmId="GTM-NMXD2L65" />
      <body className={sourceSansPro.variable}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
