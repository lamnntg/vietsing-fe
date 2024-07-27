import CustomTable from "@/components/atoms/CustomTable";
import { PRODUCT_1, PRODUCT_2 } from "@/constants/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sanpham1 from "@/public/images/sanpham1.jpg";
import Sanpham2 from "@/public/images/sanpham2.jpg";

const page = () => {
  return (
    <main className="my-10 container mx-auto">
      <h1 className="text-2xl md:text-4xl font-medium text-center py-10 pt-[60px] md:pt-[100px] uppercase">
        Các sản phẩm của Việt Sing
      </h1>
      <div className="bg-white pb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
            <Link
              href="/san-pham"
              className="flex relative gap-10 items-center flex-wrap group cursor-pointer"
            >
              <div className="flex-1 object-cover overflow-hidden">
                <Image
                  src={Sanpham1}
                  alt="service 1"
                  style={{ objectFit: "cover", height: "100%" }}
                  className="w-full aspect-[2/1] object-cover group-hover:scale-[1.1] transition"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] opacity-60 group-hover:opacity-100 transition"></div>
              <div className="absolute bottom-4 z-[3] left-0 flex flex-col items-center justify-center w-full text-white overflow-hidden group-hover:bottom-[50%] group-hover:translate-y-[50%] transition-all">
                <p className="font-medium mb-4 text-xl md:text-lg mt-4 text-center">
                  BỘT BẢ, SƠN HÃNG JOTUN
                </p>
              </div>
            </Link>
            <Link
              href="/san-pham#chongtham"
              className="flex relative gap-10 items-center flex-wrap group cursor-pointer"
            >
              <div className="flex-1 object-cover overflow-hidden">
                <Image
                  src={Sanpham2}
                  alt="san pham 1"
                  style={{ objectFit: "cover", height: "100%" }}
                  className="w-full aspect-[2/1] object-cover group-hover:scale-[1.1] transition"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] opacity-60 group-hover:opacity-100 transition"></div>
              <div className="absolute bottom-4 z-[3] left-0 flex flex-col items-center justify-center w-full text-white overflow-hidden group-hover:bottom-[50%] group-hover:translate-y-[50%] transition-all">
                <p className="font-medium mb-4 text-xl md:text-lg mt-4 text-center">
                  VẬT LIỆU CHỐNG THẤM
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl md:text-xl font-semibold uppercase mb-3">
          Các sản phẩm bột bả, sơn hãng Jotun
        </h3>
        <CustomTable
          header={[
            [
              {
                label: "TT",
                colSpan: 1,
                rowSpan: 2,
              },
              {
                label: "Tên sản phẩm",
                colSpan: 2,
                rowSpan: 1,
              },
              {
                label: "Nhãn hiệu",
                colSpan: 1,
                rowSpan: 2,
              },
            ],
            [
              {
                label: "Tên tiếng Anh",
                colSpan: 1,
                rowSpan: 2,
              },
              {
                label: "Tên tiếng Việt",
                colSpan: 1,
                rowSpan: 2,
              },
            ],
          ]}
          row={PRODUCT_1}
        />
      </div>
      <div className="pt-[5rem]" id="chongtham">
        <h3 className="text-xl md:text-xl font-semibold uppercase mb-3">
          Vật liệu chống thấm
        </h3>
        <CustomTable
          header={[
            [
              {
                label: "STT",
              },
              {
                label: "Hạng mục",
              },
              {
                label: "Sản phẩm tương ứng",
              },
              {
                label: "Đặc tính kỹ thuật ",
              },
            ],
          ]}
          row={PRODUCT_2}
        />
      </div>
    </main>
  );
};

export default page;
