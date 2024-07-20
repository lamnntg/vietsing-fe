"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Slide1 from "@/public/images/Picture3.png";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useAppStore } from "@/store/app.store";
import { FuturaNow } from "@/utils/font";
import clsx from "clsx";
import Link from "next/link";
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

import Service1 from "@/public/images/services/gym-equip.webp";
import Service2 from "@/public/images/services/art-work.jpg";
import Service3 from "@/public/images/services/deco.jpeg";

import { Montserrat } from "next/font/google";
import { Loader2 } from "lucide-react";
import StepTwo from "./StepTwo";

import project from "@/data/project.json";
import { RoutesEnum } from "@/constants/app.constants";

const montserrat = Montserrat({ subsets: ["latin"] });
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
enum StepEnums {
  ONE = "1",
  TWO = "2",
  THREE = "3",
}

const HomePage = () => {
  const { setShowFooter } = useAppStore();
  const [loaded, setLoaded] = useState(false);
  const [step, setStep] = useState<StepEnums>(StepEnums.TWO);
  const [mounted, setMounted] = useState(false);
  const { isMobile, isMobileLarge, isMobileLargeDown } = useBreakpoint();
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!loaded) {
      return;
    }
    const timeoutTwo = setTimeout(() => {
      setStep(StepEnums.THREE);
    }, 1500);
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
        className="w-[100%] max-w-[100%] overflow-hidden bg-white flex justify-center items-center relative h-[100vh]"
        style={{
          zIndex: step === StepEnums.THREE ? 1 : 3,
        }}
      >
        <video
          loop
          muted
          autoPlay
          playsInline
          poster=""
          className="w-[100%] max-w-[100%] overflow-hidden h-[100vh] object-cover"
          onCanPlayThrough={() => {
            setTimeout(() => {
              setLoaded(true);
            }, 200);
          }}
          hidden
        >
          <source
            src="https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=dmlldHNpbmcvZmlsZS5tcDQ=&version_id=null"
            type="video/mp4"
          ></source>
        </video>
        {step === StepEnums.TWO && <StepTwo />}
        {step === StepEnums.THREE && (
          <>
            <div className="fixed top-0 left-0 w-full h-[100vh] z-[-1] overflow-hidden animate-fade">
              {loaded ? (
                <video
                  loop
                  muted
                  autoPlay
                  playsInline
                  poster=""
                  className="w-[100%] max-w-[100%] overflow-hidden h-[100vh] object-cover"
                  onLoad={() => setLoaded(true)}
                >
                  <source
                    src="https://console.minio.hdcs.tech/api/v1/buckets/echo/objects/download?preview=true&prefix=dmlldHNpbmcvZmlsZS5tcDQ=&version_id=null"
                    type="video/mp4"
                  ></source>
                </video>
              ) : (
                <div className="h-[100vh] w-full flex justify-center items-center bg-gray-400">
                  <Loader2 className="mr-2 h-10 w-10 animate-spin text-primary" />
                </div>
              )}
            </div>
            {loaded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                className="w-[100%] max-w-[100%] overflow-hidden h-[100vh] absolute top-0 left-0 bg-[rgba(0,0,0,0.3)]"
              >
                <div className="absolute top-[20%] left-[5%] z-10 font-semibold w-[80vw]">
                  <h2 className="text-[38px] text-white max-w-[90%] lg:max-w-[600px] lg:text-[50px]">
                    <p className="mb-10">
                      <span className="text-primary font-bold">VIỆT</span>{" "}
                      <span className="text-[#312e81] font-bold">SING</span>
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
            )}
          </>
        )}
      </div>
      {step === StepEnums.THREE && (
        <div className="bg-white z-10 relative">
          <div className="container mx-auto">
            <div className="flex items-center flex-col md:flex-row flex-wrap gap-6">
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
                  className="rounded-lg"
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
              <div className="container mx-auto pt-6">
                <div className="flex flex-col lg:flex-row gap-10 items-center flex-wrap">
                  <div className="flex-1 object-cover h-[400px] lg:h-[600px] overflow-hidden">
                    <Image
                      src={Service1}
                      alt="service 1"
                      style={{ objectFit: "cover", height: "100%" }}
                    />
                  </div>
                  <div className="w-[100%] max-w-[100%] overflow-hidden lg:w-[40%]">
                    <p className="font-bold mb-4 text-2xl md:text-4xl">
                      SẢN XUẤT LẮP ĐẶT TRÒ CHƠI THIẾT BỊ TẬP GYM
                    </p>
                    <p className="text-gray-500">
                      Công ty Việt Sing chuyên sản xuất và lắp đặt thiết bị trò
                      chơi và tập gym ngoài trời, cam kết chất lượng và an toàn
                      hàng đầu. Chúng tôi sử dụng vật liệu bền vững như thép
                      không gỉ, nhựa cao cấp, đảm bảo độ bền và khả năng chống
                      chịu thời tiết.
                      <br />
                      Thiết kế đa dạng, hiện đại, phù hợp với mọi lứa tuổi và
                      nhu cầu sử dụng. Dịch vụ chuyên nghiệp từ tư vấn thiết kế
                      đến lắp đặt và bảo trì định kỳ, giúp sản phẩm luôn hoạt
                      động tốt. Việt Sing mong muốn nâng cao sức khỏe và gắn kết
                      cộng đồng, tạo không gian sống năng động và lành mạnh.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-10 lg:flex-row-reverse gap-10 items-center flex-wrap">
                  <div className="flex-1 object-cover h-[400px] lg:h-[600px] overflow-hidden">
                    <Image
                      src={Service2}
                      alt="service 1"
                      style={{ objectFit: "cover", height: "100%" }}
                    />
                  </div>
                  <div className="w-[100%] max-w-[100%] overflow-hidden lg:w-[40%]">
                    <p className="font-bold mb-3 text-2xl md:text-4xl">
                      TƯỢNG ART WORK{" "}
                    </p>
                    <p className="text-gray-500">
                      Dịch vụ cung cấp các tượng art work tinh xảo và độc đáo.
                      Chúng tôi sử dụng vật liệu cao cấp như đá, gỗ, kim loại,
                      đảm bảo độ bền và thẩm mỹ. Mỗi tác phẩm được chế tác tỉ
                      mỉ, thể hiện rõ nét phong cách và tâm hồn của nghệ nhân,
                      góp phần tạo điểm nhấn cho không gian sống và làm việc.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 items-center flex-wrap">
                  <div className="flex-1 object-cover h-[400px] lg:h-[600px] overflow-hidden">
                    <Image
                      src={Service3}
                      alt="service 1"
                      style={{ objectFit: "cover", height: "100%" }}
                    />
                  </div>
                  <div className="w-[100%] max-w-[100%] overflow-hidden lg:w-[40%]">
                    <p className="font-bold mb-4 text-2xl md:text-4xl">
                      BẢNG BIỂN DECO{" "}
                    </p>
                    <p className="text-gray-500">
                      Thiết kế và sản xuất bảng biển deco sáng tạo và hiện đại.
                      Chúng tôi sử dụng các vật liệu cao cấp, bền bỉ như gỗ, kim
                      loại và nhựa, đảm bảo sản phẩm có độ bền cao và thẩm mỹ.
                      Các bảng biển deco của chúng tôi không chỉ giúp trang trí
                      không gian mà còn tạo điểm nhấn độc đáo, phù hợp với nhiều
                      phong cách và nhu cầu trang trí khác nhau.
                    </p>
                  </div>
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
                    Dự án tiêu biểu
                  </span>
                </div>
              </div>
              <div className="absolute top-[50%] left-0 w-full h-[1px] bg-black z-[1]"></div>
            </div>
            <div className="bg-white py-10">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
                  {project.map((item, index) => (
                    <div className="w-full relative overflow-hidden group cursor-pointer">
                      <img
                        className="w-full h-[300px] object-cover"
                        src={item.images[0]}
                        key={index}
                        alt="image"
                      />
                      <div className="py-2 px-6 absolute transition-all duration-300 group-hover:bottom-0 bottom-[100%] flex items-center justify-center left-0 w-full h-full backdrop-blur-[3px] bg-[rgb(0,0,0,0.4)] text-white">
                        <p className="text-2xl font-semibold mb-3 text-center">
                          {item.name}
                        </p>
                      </div>
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
