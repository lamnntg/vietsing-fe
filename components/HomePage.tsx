"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Slide2 from "@/public/images/Picture2.png";
import Slide1 from "@/public/images/Picture3.png";
import Slide3 from "@/public/images/Picture4.png";
import Slide4 from "@/public/images/Picture5.png";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useAppStore } from "@/store/app.store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FuturaNow } from "@/utils/font";
import clsx from "clsx";
import Link from "next/link";
import { MENU_HOME, RoutesEnum } from "@/constants/app.constants";
import EchoImage from "@/public/echo.png";
import ArchitectImage from "@/public/architect.png";
import Thicong2 from "@/public/images/thicong2.png";
import Thicong3 from "@/public/images/thicong3.png";
import Thicong4 from "@/public/images/thicong4.png";
import Thicong5 from "@/public/images/thicong5.png";
import Thicong6 from "@/public/images/thicong6.png";
import Thicong7 from "@/public/images/thicong7.png";
import Thicong9 from "@/public/images/thicong9.png";
import Thicong10 from "@/public/images/thicong10.png";
import Thicong11 from "@/public/images/thicong11.png";
import Thicong12 from "@/public/images/thicong12.png";
import Thicong13 from "@/public/images/thicong13.png";
import Thicong14 from "@/public/images/thicong14.png";

import Image1 from "@/public/images/image1.jpg";
import Image2 from "@/public/images/image2.jpg";
import Image3 from "@/public/images/image3.jpg";
import Image4 from "@/public/images/image4.jpg";
import Image5 from "@/public/images/image5.jpg";
import Image6 from "@/public/images/image6.jpg";
import Image7 from "@/public/images/image7.jpg";
import Image8 from "@/public/images/image8.jpg";
import Video from "next-video";

const GYM_IMAGES = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
];
const THICONG = [
  Thicong2,
  Thicong3,
  Thicong4,
  Thicong5,
  Thicong6,
  Thicong7,
  Thicong9,
  Thicong10,
  Thicong11,
  Thicong12,
  Thicong13,
  Thicong14,
];

const TITLE = "E C H O".split(" ");
const DESCRIPTION = "A R C H I T E C T U R E . I N T E R I O R".split(" ");
const SLOGAN = "T i m e l e s s".split(" ");
const SLOGAN2 = "d e s i g n ,".split(" ");
const SLOGAN3 = "e n d l e s s".split(" ");
const SLOGAN4 = "e c h o .".split(" ");
enum StepEnums {
  ONE = "1",
  TWO = "2",
  THREE = "3",
}

const HEIGHT_HEADER_MOBILE = 56;
const HEIGHT_FOOTER_MOBILE = -8;

const HEIGHT_HEADER_DESKTOP = 68;
const HEIGHT_FOOTER_DESKTOP = -8;

const HomePage = () => {
  const { setShowFooter } = useAppStore();
  const [loaded, setLoaded] = useState(false);
  const [step, setStep] = useState<StepEnums>(StepEnums.THREE);
  const [mounted, setMounted] = useState(false);
  const { isMobile, isMobileLarge, isMobileLargeDown } = useBreakpoint();
  const [type, setType] = useState(1);
  const productDesign = useMemo(() => {
    const res = MENU_HOME.find((item) => item.type === type);
    return res || MENU_HOME[0];
  }, [type]);
  useEffect(() => {
    setMounted(true);
  }, []);

  const RESOLUTION = useMemo(() => {
    return {
      fullHeight: 160,
      circleStrike: {
        width: isMobileLargeDown ? 4 : 8,
      },
      line: {
        width: isMobile ? 80 : isMobileLargeDown ? 120 : 160,
        height: isMobile ? 80 : isMobileLarge ? 112 : 22,
      },
      strike: {
        width: 160,
        height: isMobileLargeDown ? 4 : 10,
      },
      logo: {
        width: isMobile ? 120 : isMobileLarge ? 254 : 364,
        height: isMobile ? 80 : isMobileLarge ? 112 : 160,
      },
      line1: {
        fontSize: isMobile ? 30 : isMobileLarge ? 80 : 120,
      },
      line2: {
        fontSize: isMobileLargeDown ? 12 : 16,
      },
    };
  }, [isMobile, isMobileLarge]);

  useEffect(() => {
    if (!loaded) {
      return;
    }
    const timeoutTwo = setTimeout(() => {
      setStep(StepEnums.THREE);
    }, 4500);
    return () => {
      clearTimeout(timeoutTwo);
    };
  }, [loaded]);

  useEffect(() => {
    if (step === StepEnums.THREE) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  }, [step]);
  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div
        className="w-[100%] bg-white flex justify-center items-center relative h-[70vh]"
        style={{
          zIndex: step === StepEnums.THREE ? 1 : 3,
        }}
      >
        <Image
          src={Logo}
          width={0}
          height={0}
          alt="Logo"
          style={{ width: "0", height: "0" }}
          onLoad={() => setLoaded(true)}
        />
        {step === StepEnums.TWO && (
          <div className="w-full px-2 flex justify-center flex-col items-center">
            <div className="flex items-center gap-8">
              <div className="relative overflow-hidden">
                <div
                  className={`flex relative gap-2 sm:gap-3 md:gap-4 items-end overflow-hidden`}
                >
                  <div className="relative">
                    <motion.div
                      className="bg-primary"
                      initial={{
                        height: RESOLUTION.line.width,
                        width: RESOLUTION.line.width,
                        transform: "translateX(-100%)",
                      }}
                      animate={{
                        transform: "translateX(0)",
                        transition: {
                          duration: 0.3,
                        },
                      }}
                    ></motion.div>
                    <div className="absolute top-[30%] left-0">
                      <motion.div
                        className="bg-white"
                        initial={{
                          height: RESOLUTION.strike.height,
                          width: RESOLUTION.strike.width,
                          transform: "translateX(-100%)",
                        }}
                        animate={{
                          transform: "translateX(0)",
                          transition: {
                            duration: 0.3,
                            delay: 2.5,
                          },
                        }}
                      ></motion.div>
                    </div>
                    <div className="absolute top-[66%] left-0">
                      <motion.div
                        className="bg-white"
                        initial={{
                          height: RESOLUTION.strike.height,
                          width: RESOLUTION.strike.width,
                          transform: "translateX(-100%)",
                        }}
                        animate={{
                          transform: "translateX(0)",
                          transition: {
                            duration: 0.3,
                            delay: 2.5,
                          },
                        }}
                      ></motion.div>
                    </div>
                  </div>
                  <div className="relative rounded-full">
                    <motion.div
                      className="bg-primary"
                      initial={{
                        height: RESOLUTION.line.width,
                        width: RESOLUTION.line.width,
                        transform: "translateX(-100%)",
                        borderRadius: "50%",
                        opacity: 0,
                      }}
                      animate={{
                        transform: "translateX(0)",
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                          delay: 0.5,
                        },
                      }}
                    ></motion.div>
                    <div
                      className="absolute top-0"
                      style={{
                        height: RESOLUTION.fullHeight,
                        right: "0.5rem",
                      }}
                    >
                      <motion.div
                        className="bg-white"
                        initial={{
                          height: RESOLUTION.fullHeight,
                          width: RESOLUTION.circleStrike.width,
                          transform: "translateY(-100%)",
                        }}
                        animate={{
                          transform: "translateY(0)",
                          transition: {
                            duration: 0.3,
                            delay: 2.5,
                          },
                        }}
                      ></motion.div>
                    </div>
                    <div
                      className="absolute top-0"
                      style={{
                        height: RESOLUTION.fullHeight,
                        right: isMobileLargeDown ? "1rem" : "1.5rem",
                      }}
                    >
                      <motion.div
                        className="bg-white"
                        initial={{
                          height: RESOLUTION.fullHeight,
                          width: RESOLUTION.circleStrike.width,
                          transform: "translateY(-100%)",
                        }}
                        animate={{
                          transform: "translateY(0)",
                          transition: {
                            duration: 0.3,
                            delay: 2.5,
                          },
                        }}
                      ></motion.div>
                    </div>
                    <div
                      className="absolute top-0"
                      style={{
                        height: RESOLUTION.fullHeight,
                        right: isMobileLargeDown ? "1.5rem" : "2.5rem",
                      }}
                    >
                      <motion.div
                        className="bg-white"
                        initial={{
                          height: RESOLUTION.fullHeight,
                          width: RESOLUTION.circleStrike.width,
                          transform: "translateY(-100%)",
                        }}
                        animate={{
                          transform: "translateY(0)",
                          transition: {
                            duration: 0.3,
                            delay: 2.5,
                          },
                        }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative flex justify-center flex-col w-fit"
                style={{
                  height: RESOLUTION.logo.height,
                }}
              >
                <motion.div
                  className="absolute left-[-17px] top-0 bg-primary"
                  initial={{
                    height: "100%",
                    width: 0,
                    transform: "translateX(0px)",
                  }}
                  animate={{
                    width: 3,
                    transition: {
                      duration: 0.2,
                      delay: 1,
                    },
                  }}
                ></motion.div>
                <div className="flex flex-col justify-between h-full">
                  <div className="h-[60%] w-[170px] sm:w-[260px] md:w-[360px] lg:w-[360px] relative overflow-hidden">
                    <img className="h-full w-full" src={EchoImage.src} alt="" />
                    <motion.div
                      initial={{
                        width: "100%",
                        right: 0,
                      }}
                      animate={{
                        width: 0,
                        right: 0,
                        transition: {
                          duration: 0.8,
                          delay: 1,
                        },
                      }}
                      className="absolute top-0 right-0 w-full bg-white h-full"
                    ></motion.div>
                  </div>
                  <div className="h-[15%] w-[170px] sm:w-[260px] md:w-[360px] lg:w-[360px] relative overflow-hidden">
                    <img
                      className="h-full w-full"
                      src={ArchitectImage.src}
                      alt=""
                    />
                    <motion.div
                      initial={{
                        width: "100%",
                        right: 0,
                      }}
                      animate={{
                        width: 0,
                        right: 0,
                        transition: {
                          duration: 0.7,
                          delay: 1.8,
                        },
                      }}
                      className="absolute top-0 right-0 w-full bg-white h-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center text-5xl md:mt-10 items-center gap-x-3 w-full">
              <div>
                {SLOGAN.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: i / 30 + 3,
                    }}
                    key={i}
                    className={`text-base sm:text-xl md:text-3xl inline-block mx-[1px] ${FuturaNow.className}`}
                  >
                    {el}
                  </motion.span>
                ))}
              </div>
              <div>
                {SLOGAN2.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: i / 30 + 0.35 + 3,
                    }}
                    key={i}
                    className={`text-base sm:text-xl md:text-3xl inline-block mx-[1px] ${FuturaNow.className}`}
                  >
                    {el}
                  </motion.span>
                ))}
              </div>
              <div>
                {SLOGAN3.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: i / 30 + 0.6 + 3,
                    }}
                    key={i}
                    className={`text-base sm:text-xl md:text-3xl inline-block mx-[1px] ${FuturaNow.className}`}
                  >
                    {el}
                  </motion.span>
                ))}
              </div>
              <div>
                {SLOGAN4.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: i / 30 + 0.9 + 3,
                    }}
                    key={i}
                    className={`text-base sm:text-xl md:text-3xl inline-block mx-[1px] ${FuturaNow.className}`}
                  >
                    {el}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        )}
        {step === StepEnums.THREE && (
          <>
            <div className="fixed top-0 left-0 w-full h-[100vh] z-[-1] overflow-hidden">
              <video
                loop
                muted
                autoPlay
                playsInline
                poster=""
                className="w-[100vw] h-[100vh] object-cover"
              >
                <source
                  src="https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=dmlldHNpbmcvZmlsZS5tcDQ=&version_id=null"
                  type="video/mp4"
                ></source>
              </video>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              className="w-[100%] h-[70vh] absolute top-0 left-0"
            >
              <div className="absolute top-[10%] left-[50%] translate-x-[-50%] z-10 uppercase font-semibold">
                <h2 className="text-[36px] text-white max-w-[90%] lg:max-w-[600px] text-center lg:text-[50px]">
                  LEADERS IN QUALITY CONSTRUCTION AND INFRASTRUCTURE
                </h2>
              </div>
            </motion.div>
          </>
        )}
      </div>
      {step === StepEnums.THREE && (
        <div className="bg-white z-10 relative">
          <div className="container mx-auto">
            <div className="flex items-center flex-col md:flex-row flex-wrap gap-6">
              <div className="flex-1">
                <h3 className="text-3xl mb-8 pt-10">
                  CÔNG TY CP XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING
                </h3>
                <p>
                  <p>
                    Lời đầu tiên, chúng tôi -{" "}
                    <span className="font-medium">
                      CÔNG TY CỔ PHẦN XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING
                    </span>{" "}
                    gửi tới Quý khách hàng lời chào trân trọng, lời chúc sức
                    khoẻ, thành công, thịnh vượng và gặp nhiều may mắn.
                  </p>
                  <p className="mt-2">
                    <span className="font-medium">
                      Công Ty Cổ Phần Xây dựng và Thương mại Việt Sing
                    </span>{" "}
                    được thành lập với mục đích cung cấp đến Quý khách hàng các
                    sản phẩm chính hãng, chất lượng cao từ các thương hiệu nổi
                    tiếng trên thế giới. Công Ty Cổ Phần Xây dựng và Thương mại
                    Việt Sing là nhà cung cấp và phân phối các dòng sơn công
                    nghiệp, sơn nội-ngoại thất, các sản phẩm phụ gia cho các
                    công trình xây dựng như vật liệu chống thấm, sơn epoxy, sơn
                    chống thấm, Băng keo chống thấm....
                  </p>
                  <p className="mt-2">
                    <span className="font-medium">Công ty Việt Sing</span> cũng
                    là đại lý cấp đặc biệt cung cấp và phân phối các loại sơn
                    của hãng Jotun (Na Uy).
                  </p>
                  <p className="mt-2">
                    <span className="font-medium">Công ty Việt Sing</span> bằng
                    tất cả nguồn lực tốt nhất với kinh nghiệm, lòng nhiệt huyết
                    và sức mạnh tập thể. Chúng tôi tự tin sẽ mang đến cho Quý
                    khách hàng những lựa chọn tối ưu phù hợp với từng hạng mục
                    và từng công trình để đảm bảo an toàn, chất lượng, tiến độ;
                    đồng thời góp phần giúp sắc màu của công trình luôn bền đẹp
                    với thời gian.
                  </p>
                  <p className="mt-2">
                    <span className="font-medium">Công ty Việt Sing</span> cam
                    kết đem lại dịch vụ tốt nhất cho từng khách hàng. Mặc dù
                    chúng tôi cung cấp những sản phẩm chất lượng cao nhưng giá
                    cả luôn rất cạnh tranh. Chúng tôi có chính sách chiết khấu
                    sản phẩm rất ưu đãi dành cho khách hàng.
                  </p>
                </p>
                <div>
                  <Link
                    className="bg-black px-10 mt-10 inline-block py-3 text-white"
                    href="/gioi-thieu"
                  >
                    TÌM HIỂU THÊM
                  </Link>
                </div>
              </div>
              <div className="flex-1">
                <Image
                  src={Slide1}
                  style={{ objectFit: "cover" }}
                  alt="Thumnail"
                />
              </div>
            </div>
            <div className="flex justify-center mt-10 relative">
              <div className="px-8 bg-white relative z-[2] ">
                <div
                  className={clsx(
                    "uppercase border-[#757575] border border-solid px-[30px] tracking-wider bg-white font-semibold text-base md:text-2xl py-4 pb-3 inline-flex justify-center items-center",
                    FuturaNow.className
                  )}
                >
                  <span className="leading-[20px] md:leading-[40px]">
                    Thi công
                  </span>
                </div>
              </div>
              <div className="absolute top-[50%] left-0 w-full h-[1px] bg-black z-[1]"></div>
            </div>
          </div>
          <div>
            <div className="bg-[#efefef] mt-10">
              <div className="container mx-auto pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {THICONG.map((item, index) => (
                    <div>
                      <Image
                        className="w-full h-[500px] object-cover"
                        src={item}
                        key={index}
                        alt="image"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8 pb-6 flex justify-center">
                  <Link
                    href={productDesign.to}
                    className="bg-[#1c1c1c] text-white w-[140px] flex justify-center items-center py-3 rounded-md border border-solid border-black hover:bg-white transition hover:text-black"
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
            </div>

            <div className="container mx-auto flex justify-center mt-10 relative">
              <div className="px-8 bg-white relative z-[2] ">
                <div
                  className={clsx(
                    "uppercase border-[#757575] border border-solid px-[30px] tracking-wider bg-white font-semibold text-base text-center md:text-2xl py-4 pb-3 inline-flex justify-center items-center",
                    FuturaNow.className
                  )}
                >
                  <span className="leading-[20px] md:leading-[40px] uppercase">
                    Hình ảnh
                  </span>
                </div>
              </div>
              <div className="absolute top-[50%] left-0 w-full h-[1px] bg-black z-[1]"></div>
            </div>
            <div className="bg-[#efefef] py-10">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                  {GYM_IMAGES.map((item, index) => (
                    <div>
                      <Image
                        className="w-full h-[400px] object-cover"
                        src={item}
                        key={index}
                        alt="image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
