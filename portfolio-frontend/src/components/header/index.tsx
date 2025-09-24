"use client";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import MobileNav from "../nav/mobile";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full glass-card sticky top-0 z-50 px-4 overflow-hidden">
      <div className="flex justify-between py-4 items-center">
        <div>
          <p>Logo</p>
        </div>

        {isOpen ? (
          <button
            className="flex items-center justify-center py-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <XMarkIcon className="w-6 h-4 text-gray-500" />
          </button>
        ) : (
          <button
            className="flex items-center justify-center py-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Bars3Icon className="w-6 h-4 text-gray-500" />
          </button>
        )}
      </div>
      {isOpen && <MobileNav />}
    </header>
  );
}
