"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { memo } from "react";

const StepTwo = () => {
  return (
    <div className="w-full px-2 flex justify-center flex-col items-center">
      <div className="flex items-center gap-8">
        <div className="relative overflow-hidden">
          <div
            className={`flex relative gap-2 sm:gap-3 md:gap-4 items-end overflow-hidden`}
          >
            <div className="relative">
              <motion.div
                initial={{
                  transform: "translateX(0)",
                  position: "relative",
                  zIndex: 3,
                }}
              >
                <Image
                  src={Logo}
                  className="w-[300px] aspect-[5/3] object-contain"
                  alt="Logo"
                />
              </motion.div>
              <motion.div
                initial={{
                  transform: "translateX(0)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 4,
                  background: "white",
                }}
                animate={{
                  transform: "translateX(100%)",
                  transition: {
                    duration: 1,
                  },
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(StepTwo);
