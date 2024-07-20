"use client";
import React from "react";
import Slide3 from "@/public/images/introduce_banner.jpg";
import Image from "next/image";
import { Clock, Mail, MapPin, Newspaper, Phone } from "lucide-react";
import Link from "next/link";
import { FACEBOOK_LINK, IFRAME_GOOGLE_MAP } from "@/constants/app.constants";

const Contact = () => {
  return (
    <main>
      <div className="h-[370] relative after:absolute after:contents-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-45">
        <Image
          src={Slide3}
          style={{
            height: 600,
            width: "100%",
            objectFit: "cover",
          }}
          alt="Liên hệ"
        />
        <h2 className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-white z-[2] text-[22px] md:text-[48px] font-light">
          Liên hệ với chúng tôi
        </h2>
      </div>
      <div className="container mx-auto flex-col md:flex-row flex gap-8 my-10 flex-wrap">
        <div className="flex-1 max-w-full">
          <p className="text-wrap">
            Để được hỗ trợ tư vấn trực tiếp từ các kiến trúc sư hàng đầu quý
            khách vui lòng liên hệ theo các kênh liên lạc sau.
          </p>
          <p className="text-wrap">
            Chúng tôi sẽ liên hệ và giới thiệu chi tiết về các dự án đã và đang
            thi công, cũng như tư vấn về dự án của quý khách.{" "}
            <span className="font-semibold">VIỆT SING</span> cam kết đem đến cho
            quý khách hàng dịch vụ tư vấn chuyên nghiệp, hiệu quả và nhanh chóng
            nhất.
          </p>
        </div>
        <div className="flex-1 max-w-full">
          <ul className="border border-b-0 border-solid border-[rgba(0,0,0,.125)] rounded">
            <li className="px-4 py-2 flex items-center gap-3 border-b border-solid border-[rgba(0,0,0,.125)]">
              <MapPin />
              <span>
                Tổ dân phố Liên Cơ, Xã Kiêu Kỵ, Huyện Gia Lâm, Thành Phố Hà Nội,
                Việt Nam
              </span>
            </li>
            <li className="px-4 py-2 flex items-center gap-3 border-b border-solid border-[rgba(0,0,0,.125)]">
              <Phone />
              <Link href="tel:+0932925999">0932.925.999 / 0941.689.999</Link>
            </li>
            <li className="px-4 py-2 flex items-center gap-3 border-b border-solid border-[rgba(0,0,0,.125)]">
              <MapPin />
              <Link
                href={FACEBOOK_LINK}
                rel="noopener noreferrer"
                target="_blank"
                className="break-words w-[85%]"
              >
                Facebook
              </Link>
            </li>
            <li className="px-4 py-2 flex items-center gap-3 border-b border-solid border-[rgba(0,0,0,.125)]">
              <Mail />
              <Link href="mailto:info@vietsinggroup.com.vn">
                info@vietsinggroup.com.vn
              </Link>
            </li>
            <li className="px-4 py-2 flex items-center gap-3 border-b border-solid border-[rgba(0,0,0,.125)]">
              <Clock />
              <span>Thời gian làm việc 8:30 - 18:00 (Th2 - Th7)</span>
            </li>
            <li className="px-4 py-2 flex items-center gap-3 border-b border-solid border-[rgba(0,0,0,.125)]">
              <Newspaper />
              <span></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white container mx-auto px-3 flex py-[80px] justify-center">
        <div className="flex gap-4 w-full flex-col md:flex-row">
          <form className="flex-1">
            <h1 className="text-3xl text-[#333]">
              Để lại lời nhắn cho chúng tôi
            </h1>
            <p className="mb-8 text-sm mt-2">
              Nếu bạn có bất cứ câu hỏi hay thắc mắc nào, hãy gửi ngay cho chúng
              tôi bằng cách điền form thông tin bên cạnh. Chúng tôi sẽ liên lạc
              lại sớm nhất. Cảm ơn bạn.
            </p>
            <div className="mb-4">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Họ tên"
              />
            </div>
            <div className="mb-4">
              <input
                className="input"
                type="text"
                name="phonenumber"
                placeholder="Số điện thoại"
              />
            </div>
            <div className="mb-4">
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Địa chỉ email"
              />
            </div>
            <div>
              <textarea
                rows={3}
                className="input"
                name="note"
                placeholder="Lời nhắn"
              />
            </div>
            <div>
              <button className="mt-10 text-[#333] w-[140px] h-[46px] rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-[1px] font-medium border-[#333]">
                <span className="absolute w-[140px] h-[46px] top-0 left-0 transition-all duration-300 origin-left -translate-x-full bg-[#333] group-hover:h-64 group-hover:-translate-x-0 ease"></span>
                <span className="relative transition duration-300 group-hover:text-white ease flex items-center gap-1 justify-center">
                  <span>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-[#333]"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </span>
                  Gửi
                </span>
              </button>
            </div>
          </form>
          <div className="flex-1 overflow-hidden">
            <iframe
              src={IFRAME_GOOGLE_MAP}
              height="450"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
