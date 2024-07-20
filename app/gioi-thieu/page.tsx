import React from "react";
import Image from "next/image";
import Slide2 from "@/public/images/gioi-thieu-banner.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleDot } from "lucide-react";
import sodo from "@/public/images/sodo.png";
import nangluc from "@/public/images/nangluc.png";

export default function Introduce() {
  return (
    <main className="pb-10">
      <div className="relative">
        <Image
          src={Slide2}
          style={{ objectFit: "cover", height: 600, width: "100%" }}
          alt="Thumnail"
        />
        <p className="absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%] z-[2] text-4xl text-nowrap lg:text-5xl text-white">
          Về VIỆT SING
        </p>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[1]"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[60%,40%] gap-8 container mx-auto items-center my-[100px]">
        <div>
          <h1 className="text-[30px] lg:text-[36px] xl:text-[40px] font-semibold text-black leading-[45px] mb-6">
            CÔNG TY CỔ PHẦN XÂY DỰNG VÀ THƯƠNG MẠI VIỆT SING
          </h1>
          <p className="text-[15px] leading-7 tracking-wide">
            Lời đầu tiên, chúng tôi - CÔNG TY CỔ PHẦN XÂY DỰNG VÀ THƯƠNG MẠI
            VIỆT SING gửi tới Quý khách hàng lời chào trân trọng, lời chúc sức
            khoẻ, thành công, thịnh vượng và gặp nhiều may mắn. VIỆT SING được
            thành lập bởi đội ngũ kiến trúc sư, thiết kế nội thất đầy sáng tạo
            và nhiệt huyết kết hợp với đội ngũ thợ thi công tay nghề cao, giàu
            kinh nghiêm dưới sự giám sát chặt chẽ của các quản lý và kỹ sư sẽ
            mang đến những không gian sống và hưởng thụ hoàn hảo cho mỗi quý
            khách hàng. Với khẩu hiệu “Thiết kế vượt thời gian, tiếng vang vượt
            thời đại”, cùng sự chuyên sâu trong lĩnh vực nghiên cứu khoa học về
            sản xuất nội thất và các giải pháp thi công tối ưu, chúng tôi luôn
            mong muốn mang đến cho quý khách hàng những thiết kế độc đáo, mang
            tính tương lai, và biến những thiết kế ấy trở thành hiện thực nhằm
            nâng cao chất lượng cuộc sống của quý khách hàng.
          </p>
        </div>
        <div>
          <Image
            src={Slide2}
            style={{ objectFit: "cover", width: "100%" }}
            alt="Thumnail"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-light text-[#222] border border-solid border-[#dedede] px-6 border-b-0 hover:no-underline">
              Sơ đồ tổ chức
            </AccordionTrigger>
            <AccordionContent className="text-base px-6 py-5 border border-solid border-[#dedede]">
              <div className="flex justify-center">
                <Image src={sodo} alt="Sơ đồ tổ chức" />
              </div>
              <div className="mt-2">
                <p className="text-xl font-semibold">Ban lãnh đạo Công ty:</p>
                <ul className="list-disc ml-4">
                  <li>Ban Giám đốc: 03 người</li>
                  <li>Phòng nghiệp vụ: 10 người</li>
                  <li>Ban CH công trường: 6 người</li>
                </ul>
                <p className="text-xl font-semibold mt-4">
                  Trình độ chuyên môn nghiệp vụ:
                </p>
                <ul className="list-disc ml-4">
                  <li>Kỹ sư: 10 người</li>
                  <li>Kiến trúc sư: 07 người</li>
                  <li>Cử nhân kinh tế: 09 người</li>
                  <li>Bằng nghề: 40 người</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="mt-3">
            <AccordionTrigger className="text-2xl font-light text-[#222] border border-solid border-[#dedede] px-6 border-b-0 hover:no-underline">
              Năng lực thi công
            </AccordionTrigger>
            <AccordionContent className="text-base px-6 py-5 border border-solid border-[#dedede]">
              <div className="flex justify-center">
                <Image src={nangluc} alt="Năng lực thi công" />
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="mt-3">
            <AccordionTrigger className="text-2xl font-light text-[#222] border border-solid border-[#dedede] px-6 border-b-0 hover:no-underline">
              Giá trị cốt lõi
            </AccordionTrigger>
            <AccordionContent className="text-base px-6 py-5 border border-solid border-[#dedede]">
              <p className="text-xl font-semibold flex items-center gap-2">
                <CircleDot size={16} /> Kỹ năng làm việc – phát triển nguồn nhân
                lực
              </p>
              <p className="ml-4 mt-1">
                Chúng tôi luôn tâm niệm nguồn nhân lực là tài sản quý nhất của
                công ty. Với mục đích đạt được sự thành công bền vững, Việt Sing
                sẽ tạo dựng nên một môi trường làm việc hổ trợ về mọi mặt cho
                nhân viên. Chúng tôi luôn tạo cơ hội và niềm tin cho nhân viên
                mình phát triển hết tiềm năng và tài năng của từng người. Đội
                ngũ chúng tôi luôn hỗ trợ cùng nhau làm việc với khách hàng nhằm
                đưa ra giải pháp có lợi nhất. Sư tôn trọng lẫn nhau luôn là nền
                tảng cho thành công của chúng tôi.
              </p>
              <p className="text-xl font-semibold mt-3 flex items-center gap-2">
                <CircleDot size={16} /> Sự chính trực – chuẩn mực đạo đức nghề
                nghiệp cao nhất
              </p>
              <p className="ml-4 mt-1">
                Chúng tôi luôn đặt lên hàng đầu các giá trị nền tảng của chất
                lượng, trung thực và cần mẫn. Chúng tôi luôn hướng đến những
                chuẩn mực nghề nhiệp cao nhất trong lĩnh vực của mình. Việt Sing
                luôn làm việc với thái độ thẳng thắn và chính trực. Chúng tôi
                tạo dựng một doanh nghiệp với nền tảng là sự tin cậy. Tên tuổi
                Việt Sing gắn liền với các chuẩn mực vượt trội của dịch vụ, chất
                lượng, hướng đến khách hàng và sự chính trực.
              </p>
              <p className="text-xl font-semibold mt-3 flex items-center gap-2">
                <CircleDot size={16} /> Sự cam kết – hướng đến khách hàng
              </p>
              <p className="ml-4 mt-1">
                Chúng tôi chủ động đưa ra những giải pháp tối ưu cho khách hàng
                của mình. Sự hợp tác bền vững và quan hệ lâu bền với khách hàng
                là sự sống của công ty chúng tôi. Chúng tôi luôn tạo niềm tin
                với khách hàng với hình ảnh nhân viên của chúng tôi luôn nổ lực
                với quyết tâm cao nhất trong mọi công việc. Đây là sự khác biệt.
                Từng cá nhân trong Công ty Việt Sing “hướng đến khách hàng” và
                chăm sóc khách hàng như khách hàng duy nhất của chúng tôi.{" "}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* <div className="container mx-auto mt-[100px]">
        <h3 className="text-3xl lg:text-[39px] text-center uppercase mb-10">
          Dịch vụ cung cấp
        </h3>
        <div className="flex items-center justify-center mt-6 gap-[60px] flex-col md:flex-row ">
          <div className="flex flex-col items-center gap-4 text-primary w-[33.33%]">
            <Building size={40} />
            <p className="text-xl lg:text-2xl text-nowrap font-medium text-primary text-center">
              Thiết kế kiến trúc, nội thất
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-primary w-[33.33%]">
            <SquarePen size={40} />
            <p className="text-xl lg:text-2xl text-nowrap font-medium text-primary text-center text-nowrap">
              Thi công hoàn thiện kiến trúc, nội thất
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-primary w-[33.33%]">
            <Building2 size={40} />
            <p className="text-xl lg:text-2xl text-nowrap font-medium text-primary text-center">
              Quản lý dự án
            </p>
          </div>
        </div>
      </div> */}

      {/* <Team /> */}
    </main>
  );
}
