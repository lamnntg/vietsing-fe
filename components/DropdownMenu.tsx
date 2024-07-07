import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useBreakpoint from "@/hooks/useBreakpoint";
import { DropdownLink } from "@/types/project.type";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

type DropdownMenuProps = {
  item: DropdownLink;
  isFooter?: boolean;
  showMenu?: boolean;
};

const DropdownMenu: FC<DropdownMenuProps> = ({ item, isFooter, showMenu }) => {
  const pathname = usePathname();
  const { isDesktopDown } = useBreakpoint();
  const [showSubMenu, setShowSubMenu] = useState(showMenu);
  const [isHover, setIsHover] = useState(false);

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };
  return isDesktopDown || isFooter ? (
    <div
      className={cn(
        "text-nowrap px-4 gap-2 transition cursor-pointer my-3 leading-6 text-base",
        isFooter && "px-0 my-0 mb-3"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 hover:text-primary",
          item.items.find((item) => item.href === pathname) && "text-primary"
        )}
        onClick={() => setShowSubMenu(!showSubMenu)}
      >
        {item.label}
        <FontAwesomeIcon icon={faSortDown} className="-mt-1" />
      </div>
      <motion.div
        style={{ overflow: "hidden" }}
        initial="close"
        animate={showSubMenu ? "open" : "close"}
        variants={menu}
      >
        {item.items.map((l) => (
          <Link
            key={l.href + l.label}
            href={l.href}
            className={cn(
              "text-nowrap my-2 hover:text-primary px-2 block transition",
              pathname === l.href && "text-primary"
            )}
            prefetch
          >
            {l.label}
          </Link>
        ))}
      </motion.div>
    </div>
  ) : (
    <motion.div
      className="relative"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
    >
      <div
        className={cn(
          "text-nowrap flex items-center px-4 gap-2 text-sm hover:text-primary transition cursor-pointer",
          item.items.find((item) => item.href === pathname) && "text-primary"
        )}
      >
        {item.label}
        <FontAwesomeIcon icon={faSortDown} className="-mt-1" />
      </div>
      <motion.div
        className="absolute top-full left-0 z-[2]"
        initial="exit"
        animate={isHover ? "enter" : "exit"}
        variants={subMenuAnimate}
      >
        <div className=" bg-white py-4 rounded-b-md">
          {item.items.map((l) => (
            <Link
              href={l.href}
              className={cn(
                " text-nowrap my-2 px-8 block hover:text-primary transition",
                pathname === l.href && "text-primary"
              )}
              prefetch
            >
              {l.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DropdownMenu;
