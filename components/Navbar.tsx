"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import hardSkills from "@/public/coding.jpg";
import scott from "@/public/scott.png";
import portfolio from "@/public/raspberry.jpg";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    className={`transition-transform duration-500 ${
      showNavbar ? "translate-y-0 translate-x-20" : "-translate-y-full"
    } fixed top-0 left-5 md:left-14 py-7 md:max-w-2xl z-50 mx-auto w-full font-semibold`}
  >
    <div className="space-x-4">
      <HoveredLink href="#about">
        About
      </HoveredLink>
      <HoveredLink  href="#portfolio">
        Portfolio
      </HoveredLink>
      <HoveredLink href="#hardSkills">
        Hard Skills
      </HoveredLink>
    </div>
  </div>
  );
}


// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   return (
//     <div className={cn("fixed top-10 md:max-w-2xl z-50 mx-auto ", className)}>
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="PORTFOLIO">
//           <div className=" text-sm grid grid-cols-2 gap-5 md:gap-10 md:p-1">
//             <ProductItem
//               title="Portfolio"
//               href="#portfolio"
//               src={portfolio}
//               description="Scott's Portfolio Work"
//             />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="ABOUT">
//           <div className="text-sm grid grid-cols-2 gap-5 md:gap-10 md:p-1">
//             <ProductItem
//               title="About"
//               href="#about"
//               src={scott}
//               description="About Scott & Resume Download (pdf)"
//             />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="HARD SKILLS">
//           <div className="text-sm grid grid-cols-2 gap-5 md:gap-10 md:p-1 ">
//             <ProductItem
//               title="Hard Skills"
//               href="#hardSkills"
//               src={hardSkills}
//               description="List of Scott's Hard Skills"
//             />
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }
