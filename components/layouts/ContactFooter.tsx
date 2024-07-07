"use client";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faRightLong,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import React, { memo, useState } from "react";
import Zalo from "@/public/zalo.svg";
import Messenger from "@/public/messenger.svg";
import Phone from "@/public/phone.svg";
import Image from "next/image";

const ContactFooter = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <div
        className={clsx(
          "rotate-[270deg] fixed right-10 bottom-[184px] z-10 transition-all cursor-pointer text-primary",
          active ? "translate-y-[260px]" : ""
        )}
        onClick={() => setActive(!active)}
      >
        Liên hệ <FontAwesomeIcon icon={faRightLong} />
      </div>
      <div
        className={clsx(
          "fixed right-2 bottom-[160px] z-10 transition-all",
          active ? "translate-y-0" : "translate-y-[360px]"
        )}
      >
        <div>
          <div className="mb-2 text-white bg-[#fff] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
            <Link
              href="https://zalo.me/0886889995"
              target="_blank"
              className="text-[14px] text-[#005be0] font-semibold"
            >
              <Image src={Zalo} alt="zalo" />
            </Link>
          </div>
          <div className="bg-[#fff] rounded-full w-10 h-10 flex justify-center items-center mb-3 cursor-pointer">
            <a href="tel:+0886889995">
              <Image src={Phone} alt="phone" />
            </a>
          </div>
          <div className="mb-3 bg-[#fff] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer">
            <Link href="https://m.me/100144595512175" target="_blank">
              <Image src={Messenger} alt="messenger" />
            </Link>
          </div>
          <div
            className="bg-[#f58634] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
            onClick={() => setActive(!active)}
          >
            <FontAwesomeIcon icon={faXmark} color="#fff" size="xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ContactFooter);
