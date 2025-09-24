"use client";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import MobileNav from "../nav/mobile";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full glass-card sticky top-0 z-50 px-4 overflow-hidden">
      <div className="flex justify-between py-3 items-center">
        <div>
          <Image
            src="/logo/my-logo.svg"
            alt="Moyo Odunlami Logo"
            width={38}
            height={38}
            className="rounded-xl"
          />
        </div>

        {isOpen ? (
          <button
            className="flex items-center justify-center p-2 hover:bg-github-btn hover:text-white rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <XMarkIcon className="w-5 h-5 text-nav-text" />
          </button>
        ) : (
          <button
            className="flex items-center justify-center p-2 hover:bg-github-btn hover:text-white rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Bars3Icon className="w-5 h-5 text-nav-text" />
          </button>
        )}
      </div>
      {isOpen && <MobileNav />}
    </header>
  );
}
