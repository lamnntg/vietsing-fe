"use client";

import { memo, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductType } from "@/types/project.type";
import { useRouter } from "next/navigation";
import { RoutesEnum, SERVICES } from "@/constants/app.constants";

const ProductFilter = () => {
  const router = useRouter();
  const [value, setValue] = useState(ProductType.ALL);
  const updateFilter = (filter: string) => {
    router.push(RoutesEnum.COMPLETED + "?category=" + filter);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setValue((searchParams.get("category") as ProductType) || ProductType.ALL);
  }, [router]);

  return (
    <div className="flex gap-4 justify-end mb-10 items-center">
      <p>Lọc theo</p>
      <Select value={value} onValueChange={(value) => updateFilter(value)}>
        <SelectTrigger className="w-[500px] max-w-full">
          <SelectValue placeholder="Tất cả" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value={ProductType.ALL}>Tất cả dự án</SelectItem>
            {SERVICES.map((service) => (
              <SelectItem key={service.title} value={service.type}>
                {service.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default memo(ProductFilter);
