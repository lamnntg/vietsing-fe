"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Slide1 from "@/public/images/introduce.jpg";
import { useAppStore } from "@/store/app.store";
import { FuturaNow } from "@/utils/font";
import clsx from "clsx";
import Link from "next/link";
import Service1 from "@/public/images/services/gym-equip.webp";
import Service2 from "@/public/images/services/art-work.jpg";
import Service3 from "@/public/images/services/deco.jpeg";

import { Montserrat } from "next/font/google";
import { Dumbbell, Images, Landmark } from "lucide-react";
import StepTwo from "./StepTwo";
import FooterImage from "@/public/images/construction-banner.jpg";
import project from "@/data/project.json";
import { RoutesEnum, SERVICES } from "@/constants/app.constants";
import { ProductType } from "@/types/project.type";
import Banner from "./Banner";

const montserrat = Montserrat({ subsets: ["latin"] });

enum StepEnums {
  ONE = "1",
  TWO = "2",
  THREE = "3",
}

const HomePage = () => {
  const { firstTimeLoaded, setFirstTimeLoaded } = useAppStore();
  const { setShowFooter } = useAppStore();
  const [loaded, setLoaded] = useState(false);
  const [step, setStep] = useState<StepEnums>(StepEnums.TWO);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let timeoutTwo: any;
    console.warn("firstTimeLoaded", firstTimeLoaded);
    if (firstTimeLoaded) {
      timeoutTwo = setTimeout(() => {
        setStep(StepEnums.THREE);
        setFirstTimeLoaded(false);
      }, 1500);
    } else {
      setStep(StepEnums.THREE);
    }
    return () => {
      clearTimeout(timeoutTwo);
    };
  }, []);
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
        className="w-[100%] max-w-[100%] overflow-hidden bg-white flex justify-center items-center relative h-[100vh]"
        style={{
          zIndex: step === StepEnums.THREE ? 1 : 3,
        }}
      >
        {step === StepEnums.TWO && <StepTwo />}
        {step === StepEnums.THREE && (
          <>
            <div className="h-[100vh] z-[-1] overflow-hidden animate-fade">
              <Banner />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              <div className="absolute top-[20%] left-[5%] z-10 font-semibold w-[80vw]">
                <h2 className="text-[38px] text-white max-w-[90%] lg:max-w-[600px] lg:text-[50px]">
                  <p className="mb-10 text-nowrap">
                    <span className="text-primary font-bold">VIETSING</span>{" "}
                    <span className="text-[#312e81] font-bold">GROUP</span>
                  </p>
                  <div className={montserrat.className}>
                    <motion.p
                      className="uppercase font-medium  max-md:text-[20px] lg:text-[42px]"
                      initial={{
                        transform: "translateX(-100%)",
                        opacity: 0,
                      }}
                      animate={{
                        transform: "translateX(0)",
                        opacity: 1,
                        transition: {
                          duration: 0.8,
                        },
                      }}
                    >
                      Sức mạnh bền bỉ
                    </motion.p>
                    <motion.p
                      className="uppercase font-medium  max-md:text-[20px] lg:text-[42px]"
                      initial={{
                        transform: "translateX(100%)",
                        opacity: 0,
                      }}
                      animate={{
                        transform: "translateX(0)",
                        opacity: 1,
                        transition: {
                          duration: 0.8,
                        },
                      }}
                    >
                      nghệ thuật sáng tạo
                    </motion.p>
                    <motion.p
                      className="uppercase font-medium max-md:text-[20px] lg:text-[42px]"
                      initial={{
                        transform: "translateX(-100%)",
                        opacity: 0,
                      }}
                      animate={{
                        transform: "translateX(0)",
                        opacity: 1,
                        transition: {
                          duration: 0.8,
                        },
                      }}
                    >
                      Tỏa sáng không gian
                    </motion.p>
                  </div>
                  <Link href={RoutesEnum.INTRODUCE}>
                    <button className="border border-white border-solid text-[20px] transition px-4 py-3 mt-10 hover:bg-primary hover:border-primary rounded-md">
                      Tìm hiểu thêm
                    </button>
                  </Link>
                </h2>
              </div>
            </motion.div>
          </>
        )}
      </div>
      {step === StepEnums.THREE && (
        <div className="bg-white z-10 relative">
          <div className="container mx-auto">
            <div className="hidden lg:flex items-center flex-col md:flex-row flex-wrap gap-6 pt-14">
              <div className="flex-1">
                <h3 className="font-bold text-2xl md:text-4xl mb-8 pt-10">
                  CÔNG TY CP XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING
                </h3>
                <p>
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
                  {/* <p className="mt-2">
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
                  </p> */}
                </p>
                <div>
                  <Link
                    className="bg-black px-10 mt-10 inline-block py-3 text-white"
                    href={RoutesEnum.INTRODUCE}
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
                  className="rounded-lg shadow-md h-[200px] md:h-[400px]"
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
                    dịch vụ
                  </span>
                </div>
              </div>
              <div className="absolute top-[50%] left-0 w-full h-[1px] bg-black z-[1]"></div>
            </div>
          </div>
          <div>
            <div className=" mt-10">
              <div className="container mx-auto pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {SERVICES.slice(0, 3).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex relative gap-10 items-center flex-wrap group cursor-pointer"
                  >
                    <div className="flex-1 object-cover h-[300px] lg:h-[460px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt="service"
                        style={{ objectFit: "cover", height: "100%" }}
                        className="group-hover:scale-[1.1] transition"
                      />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] opacity-60 group-hover:opacity-100 transition"></div>
                    <div className="absolute bottom-4 z-[3] left-0 flex flex-col items-center justify-center w-full text-white overflow-hidden group-hover:bottom-[50%] group-hover:translate-y-[50%] transition-all">
                      <div className="w-10 h-10 rounded-full border border-solid border-white flex justify-center items-center">
                        <item.icon />
                      </div>
                      <p className="font-medium mb-4 text-xl md:text-lg mt-4 text-center">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {SERVICES.slice(3).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex relative gap-10 items-center flex-wrap group cursor-pointer"
                  >
                    <div className="flex-1 object-cover h-[300px] lg:h-[460px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt="service"
                        style={{ objectFit: "cover", height: "100%" }}
                        className="group-hover:scale-[1.1] transition"
                      />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] opacity-60 group-hover:opacity-100 transition"></div>
                    <div className="absolute bottom-4 z-[3] left-0 flex flex-col items-center justify-center w-full text-white overflow-hidden group-hover:bottom-[50%] group-hover:translate-y-[50%] transition-all">
                      <div className="w-10 h-10 rounded-full border border-solid border-white flex justify-center items-center">
                        <item.icon />
                      </div>
                      <p className="font-medium mb-4 text-xl md:text-lg mt-4 text-center">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                ))}
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
                    Dự án tiêu biểu
                  </span>
                </div>
              </div>
              <div className="absolute top-[50%] left-0 w-full h-[1px] bg-black z-[1]"></div>
            </div>
            <div className="bg-white py-10">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 pt-10">
                  {project.map((item, index) => (
                    <Link
                      href={RoutesEnum.COMPLETED + "/" + item.id}
                      key={index}
                      className="block w-full relative overflow-hidden group cursor-pointer"
                    >
                      <img
                        className="w-full h-[300px] object-cover transition group-hover:scale-[1.1]"
                        src={item.images[0]}
                        key={index}
                        alt="image"
                      />
                      <div className="py-2 px-6 absolute transition-all duration-300 group-hover:bottom-0 bottom-[100%] flex items-center justify-center left-0 w-full h-full backdrop-blur-[3px] bg-[rgb(0,0,0,0.4)] text-white">
                        <p className="text-2xl font-semibold mb-3 text-center">
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.4)] z-[11]"></div>
            <Image
              src={FooterImage}
              className="relative z-10 h-[360px] object-cover"
              alt="footer image"
            />
            <div className="absolute w-full text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white z-[12]">
              <h2 className="text-xl md:text-3xl">
                CÔNG TY CP XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING{" "}
              </h2>
              <p className="mt-6 text-lg">
                Đơn vị Tư vấn Thiết kế - Sản xuất - Thương Mại
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
