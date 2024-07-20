import CustomTable from "@/components/atoms/CustomTable";
import React from "react";

const page = () => {
  return (
    <main className="my-10 container mx-auto">
      <h1 className="text-2xl md:text-4xl font-medium text-center py-10 pt-[100px] uppercase">
        Các sản phẩm của Việt Sing
      </h1>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold uppercase mb-3">
          Các sản phẩm bột bả, sơn hãng Jotun
        </h3>
        <CustomTable
          header={[
            {
              label: "TT",
              colSpan: 2,
              rowSpan: 1,
            },
            {
              label: "Tên sản phẩm",
              colSpan: 2,
              rowSpan: 1,
            },
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
            {
              label: "Nhãn hiệu",
              colSpan: 2,
              rowSpan: 1,
            },
          ]}
          row={[]}
        />
      </div>
    </main>
  );
};

export default page;
