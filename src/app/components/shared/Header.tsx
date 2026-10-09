import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logo.webp"; // Adjust the path to your logo image
import Navlinks from "./Navlinks";
import Marqee from "../home/Marqee";

export default function Header() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Bar: Logo & Action Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Left Spacer for Centered Logo layout balance on larger screens */}
        <div className="hidden md:flex items-center space-x-4 w-1/4"></div>

        {/* Center: Logo & Date */}
        <div className="flex flex-col items-center justify-center text-center">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Icon */}
            <div className="w-10 h-10 bg-[#0F1423] rounded-xl flex items-center justify-center shadow-md">
              <Image src={logo} alt="Logo" width={40} height={40} />
            </div>
            {/* Logo Text */}
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#A80000] tracking-tight">
              Bangla News 24
            </span>
          </Link>

          <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
            {date}
          </p>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center justify-end gap-4 w-auto md:w-1/4">
          <Link
            href="/signin"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            সাইন ইন
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-[#C00000] hover:bg-[#A00000] text-white text-sm font-semibold rounded-md shadow-sm transition-colors duration-200"
          >
            সাইন আপ
          </Link>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <Navlinks></Navlinks>
      </nav>
      <Marqee></Marqee>
    </header>
  );
}
