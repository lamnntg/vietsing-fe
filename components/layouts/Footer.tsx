"use client";
import { useAppStore } from "@/store/app.store";
import React, { memo } from "react";
import ContactFooter from "./ContactFooter";
import clsx from "clsx";
import { FuturaNow } from "@/utils/font";
import { usePathname } from "next/navigation";
import LogoWhite from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  dropdownMenuItems,
  FACEBOOK_LINK,
  RoutesEnum,
} from "@/constants/app.constants";
import DropdownMenu from "../DropdownMenu";

const Footer = () => {
  const { showFooter } = useAppStore();
  const pathname = usePathname();
  if (!showFooter) {
    return null;
  }
  return (
    <div className="bg-[#4b4b4b] text-white pt-10 pb-6 z-10 relative">
      <div className="container mx-auto lg:grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src={LogoWhite}
            style={{
              objectFit: "cover",
              width: "135px",
            }}
            alt="Logo"
          />
          <p className="mt-6">
            Tổ dân phố Liên Cơ, Xã Kiêu Kỵ, Huyện Gia Lâm, Thành Phố Hà Nội,
            Việt Nam
          </p>
          <p className="mt-3">
            <Link
              href="tel:0932925999"
              className="hover:text-primary transition"
            >
              0932.925.999 / 0941.689.999
            </Link>
          </p>
          <p className="mt-3">
            <Link
              href="mailto:infor@echodesign.vn"
              target="_blank"
              className="hover:text-primary transition"
            >
              info@vietsinggroup.com.vn
            </Link>
          </p>
          <p className="mt-3">Thời gian làm việc: 8:30 - 18:00 (Th2 - Th7)</p>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 md:mb-7">VỀ CHÚNG TÔI</p>
          <Link className="mb-3 transition hover:text-primary" href="/">
            Trang chủ
          </Link>
          <Link
            className="mb-3 transition hover:text-primary"
            href="/gioi-thieu"
          >
            Giới thiệu
          </Link>
          <Link
            className="mb-3 transition hover:text-primary"
            href={RoutesEnum.COMPLETED}
          >
            Sản phẩm
          </Link>
        </div>

        <div>
          <p className="mb-2 md:mb-7">LIÊN HỆ CHÚNG TÔI</p>
          <div className="flex items-center gap-2 mb-3 transition hover:text-primary cursor-pointer">
            <Link href={RoutesEnum.LIEN_HE} className="flex items-center">
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
};

export default memo(Footer);
