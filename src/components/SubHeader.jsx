"use client";

import React from "react";
import {
  Navbar,
  MobileNav,
  p,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { BsFillBellFill } from "react-icons/bs";

import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export function SubHeader() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
      <Link
        href="#"
        className=" xl:ml-20 items-center rounded-full text-[#0917b0] bg-white shadow-xl border  px-5 py-3 font-semibold "
      >
        Send
      </Link>
      <Link
        href="#"
        className=" items-center rounded-full text-[#0917b0]  px-5 py-3 font-semibold "
      >
        Request
      </Link>
      <Link
        href="#"
        className=" items-center rounded-full text-[#0917b0]  px-5 py-3 font-semibold "
      >
        Contacts
      </Link>
      <Link
        href="#"
        className=" items-center rounded-full text-[#0917b0]  px-5 py-3 font-semibold "
      >
        More
      </Link>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-3xl py-2 px-4 rounded-none border-none lg:px-8 lg:py-6 ">
      <div className="container mx-auto px-20 flex items-center justify-between text-[#D1F1FF] ">
        <div className=" justify-start ">{navList}</div>
      </div>
    </Navbar>
  );
}
