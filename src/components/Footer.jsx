"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="  py-2 px-4 rounded-none border-t-2 shadow-lg bottom-0 w-full absolute lg:px-8 lg:py-6 ">
      <div className="container mx-auto md:px-20 flex items-center justify-between text-black ">
        <div className=" justify-start ">
          <ul className=" flex flex-col gap-2  lg:flex-row lg:items-center lg:gap-10 font-bold">
            <Image
              src="/assets/paypal-footer.png"
              className=" h-10 w-20  "
              width={400}
              height={400}
              alt="paypal"
            />
            <Link href="#" className="flex items-center  ">
              Help
            </Link>

            <Link href="#" className="flex items-center">
              Contact Us
            </Link>
            <Link href="#" className="flex items-center">
              Security
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
