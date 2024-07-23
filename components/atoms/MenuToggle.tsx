import { useState, useEffect } from "react";
import { SVGMotionProps, motion } from "framer-motion";
import { useBreakpointScreen } from "@/utils/breakpoint";
import useBreakpoint from "@/hooks/useBreakpoint";
import { usePathname } from "next/navigation";

const Path = (props: SVGMotionProps<SVGPathElement>) => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

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
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={
        active ||
        ["/du-an", "/san-pham"].includes(pathname) ||
        pathname.includes("/du-an")
          ? "hsl(0, 0%, 18%)"
          : "white"
      }
      strokeLinecap="round"
      {...props}
    />
  );
};

type MenuToggleProps = {
  toggle: () => void;
};

export const MenuToggle: React.FC<MenuToggleProps> = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
