"use client";
import React, { useEffect, useMemo, useState } from "react";
import { MenuToggle } from "../atoms/MenuToggle";
import { motion } from "framer-motion";
import useBreakpoint from "@/hooks/useBreakpoint";
import Image from "next/image";
import LogoText from "@/public/images/logo_small.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import clsx from "clsx";
import { useAppStore } from "@/store/app.store";
import { usePathname } from "next/navigation";
import DropdownMenu from "../DropdownMenu";
import { FACEBOOK_LINK, RoutesEnum } from "@/constants/app.constants";
import { cn } from "@/lib/utils";
import path from "path";

const menu = {
  open: {
    height: "auto",
    transition: {
      delay: 0.1,
    },
  },
  close: {
    height: 0,
    transition: {
      delay: 0.1,
    },
  },
};

const Header = () => {
  const { showFooter } = useAppStore();
  const { isDesktopDown } = useBreakpoint();
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const { setShowFooter } = useAppStore();
  useEffect(() => {
    if (pathname !== "/") {
      setShowFooter(true);
    }
  }, []);

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const height = window.innerHeight;
      if (window.scrollY > height * 0.2) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [true]);
  const showBannerText = useMemo(() => {
    return (
      active ||
      ["/du-an", "/san-pham"].includes(pathname) ||
      pathname.includes("/du-an")
    );
  }, [active, pathname]);
  if (!showFooter) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-[11]  font-medium w-full px-3 transition",
        showBannerText
          ? "bg-white text-black shadow-md"
          : "text-white bg-transparent"
      )}
    >
      {isDesktopDown ? (
        <motion.nav initial={false} animate={show ? "open" : "closed"}>
          <div className="flex justify-between pr-4 relative py-2 ">
            <Link href="/">
              <Image
                className="w-[80px] h-[40px] object-cover"
                alt="Logo echo"
                src={LogoText}
              />
            </Link>
            {showBannerText && (
              <div className="flex items-center gap-1">
                <span className="text-xl font-semibold text-[#ca001a]">
                  VIETSING
                </span>
                <span className="text-xl font-semibold text-[#18298b]">
                  GROUP
                </span>
              </div>
            )}
            <MenuToggle toggle={() => setShow(!show)} />
            <motion.div
              style={{ overflow: "hidden" }}
              initial="close"
              animate={show ? "open" : "close"}
              className={clsx(
                "absolute top-full left-0 w-full bg-white transition -mt-1 text-black shadow-md"
              )}
              variants={menu}
            >
              <Link
                href={RoutesEnum.HOME}
                className={cn(
                  "flex items-center px-4 hover:text-primary transition my-3 leading-6 text-base",
                  pathname === RoutesEnum.HOME && "text-primary"
                )}
              >
                Trang chủ
              </Link>
              <Link
                href={RoutesEnum.INTRODUCE}
                className={cn(
                  "flex items-center px-4 hover:text-primary transition my-3 leading-6 text-base",
                  pathname === RoutesEnum.INTRODUCE && "text-primary"
                )}
              >
                Giới thiệu
              </Link>
              <Link
                href={RoutesEnum.COMPLETED}
                className={cn(
                  "flex items-center px-4 hover:text-primary transition my-3 leading-6 text-base",
                  pathname === RoutesEnum.COMPLETED && "text-primary"
                )}
                prefetch
              >
                Dự án
              </Link>
              <Link
                href={RoutesEnum.SAN_PHAM}
                className={cn(
                  "flex items-center px-4 hover:text-primary transition my-3 leading-6 text-base",
                  pathname === RoutesEnum.SAN_PHAM && "text-primary"
                )}
                prefetch
              >
                Sản phẩm
              </Link>
              <Link
                href={RoutesEnum.LIEN_HE}
                className={cn(
                  "flex items-center px-4 hover:text-primary transition my-3 leading-6 text-base",
                  pathname === RoutesEnum.LIEN_HE && "text-primary"
                )}
                prefetch
              >
                Liên hệ
              </Link>
            </motion.div>
          </div>
        </motion.nav>
      ) : (
        <div className="container mx-auto w-full flex justify-between py-1 px-3">
          <Link href="/" className=" block w-36 mt-1">
            <Image
              src={LogoText}
              className="w-[90px] h-[52px] object-cover py-1"
              alt="Logo echo"
            />
          </Link>
          <div className="flex items-center uppercase">
            <Link
              href={RoutesEnum.HOME}
              className={cn(
                "flex items-center px-4 text-sm hover:text-primary transition",
                pathname === RoutesEnum.HOME && "text-primary"
              )}
            >
              Trang chủ
            </Link>
            <Link
              href={RoutesEnum.INTRODUCE}
              className={cn(
                "flex items-center px-4 text-sm hover:text-primary transition",
                pathname === RoutesEnum.INTRODUCE && "text-primary"
              )}
            >
              Giới thiệu
            </Link>
            <Link
              href={RoutesEnum.COMPLETED}
              className={cn(
                "flex items-center px-4 text-sm hover:text-primary transition",
                pathname === RoutesEnum.COMPLETED && "text-primary"
              )}
              prefetch
            >
              Dự án
            </Link>
            <Link
              href={RoutesEnum.SAN_PHAM}
              className={cn(
                "flex items-center px-4 text-sm hover:text-primary transition",
                pathname === RoutesEnum.SAN_PHAM && "text-primary"
              )}
              prefetch
            >
              Sản phẩm
            </Link>
            <Link
              href={RoutesEnum.LIEN_HE}
              className={cn(
                "flex items-center px-4 text-sm hover:text-primary transition",
                pathname === RoutesEnum.LIEN_HE && "text-primary"
              )}
              prefetch
            >
              Liên hệ
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
