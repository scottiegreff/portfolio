"use client";
import React, { useState } from "react";
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

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white"></p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="HARD SKILLS">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Hard Skills"
              href="#hardSkills"
              src={hardSkills}
              description="List of Scott's Hard Skills"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="ABOUT">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="About"
              href="#about"
              src={scott}
              description="About Scott & Resume Download (pdf)"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="PORTFOLIO">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Portfolio"
              href="#portfolio"
              src={portfolio}
              description="Scott's Portfolio of Work"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
