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

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <Image
        src="/assets/paypal-logo.png"
        className=" h-10 w-10  md:block hidden"
        width={400}
        height={400}
      />
      <Link href="#" className="flex items-center">
        Home
      </Link>
      <Link
        href="#"
        className="flex items-center rounded-full bg-[#ffffff15]   px-4 py-2"
      >
        Send
      </Link>
      <Link href="#" className="flex items-center">
        Wallet
      </Link>
      <Link href="#" className="flex items-center">
        Activity
      </Link>
      <Link href="#" className="flex items-center">
        Help
      </Link>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-3xl py-2 px-4 rounded-none border-none lg:px-8 lg:py-6 bg-[#0917b0]">
      <div className="container mx-auto md:px-20 flex items-center justify-between text-[#D1F1FF] ">
        <div className="hidden lg:block justify-start ">{navList}</div>
        <Image
          src="/assets/paypal-logo.png"
          className=" h-10 w-10 md:hidden block "
          width={400}
          height={400}
        />
        <div className="hidden lg:inline-block ">
          <p className=" flex gap-2">
            <span>
              <BsFillBellFill className="h-5 w-5 mr-2" />
            </span>
            <span>
              <Cog8ToothIcon className="h-5 w-5 mr-2" />
            </span>

            <span className=" text-sm">LOG OUT</span>
          </p>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span className=" uppercase">Log Out</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
