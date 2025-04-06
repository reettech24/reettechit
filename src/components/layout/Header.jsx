"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  HeartIcon as HeartSolid,
} from "@heroicons/react/20/solid";

const navigation = [
  // { name: "Home", href: "/", current: true },
  // { name: "Services", href: "/Services", current: false },
  { name: "About", href: "/about", current: false },
  // { name: "Industies", href: "/industies", current: false },
  // { name: "Contact Us", href: "/contact-us", current: false },
];
export const Header = () => {
  return (
    <header className=" bg-white backdrop-blur-xl text-black sticky top-0 z-20 items-center place-content-center self-center place-items-center">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between pr-6 py-2 lg:px-0 lg:py-3"
      >
        <div className="flex lg:flex-1">
          {/* <Link href={""} className="text-black uppercase text-2xl">
            Puneeta Ranjan
          </Link> */}
          <Image
            alt=""
            src="/logo.png"
            width={100}
            height={0}
            className=" w-50"
          />
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-8 w-8" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:block lg:gap-x-8 text-lg font-medium">
          {/* <Link href={""} className="text-black uppercase">
            home
          </Link> */}

          <Popover className="relative flex items-center gap-x-10 text-black focus:outline-none">
            <PopoverButton className="flex items-center gap-x-1 text-black focus:outline-none  ">
              Services
              <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute top-12  z-10 mt-3 md:w-[80vh] overflow-hidden rounded-xl bg-black/90 backdrop-blur-lg ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4 py-4">
                {/* {premiumservices.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-row items-center justify-center gap-y-4 rounded-xl py-6 px-3 bg-emerald-900 text-white hover:text-black shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-white/80"
                >
             
                  <div className="flex flex-col items-center justify-center cursor-pointer">
                    <Link
                      href={item.href}
                      className="text-xl  font-semibold text-center transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-2 text-center text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))} */}
              </div>

              <div className="grid grid-cols-2 divide-x divide-gray-200 bg-white/50 backdrop-blur-sm">
                {/* {callsToAction.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-black hover:text-white justify-center gap-x-3 p-4 text-xl font-semibold  hover:bg-black transition-colors duration-200"
                >
                  <item.icon
                    aria-hidden="true"
                    className="w-8 h-8 text text-white group-hover:text-indigo-500 transition-colors duration-200"
                  />
                  {item.name}
                </Link>
              ))} */}
              </div>
            </PopoverPanel>
            <PopoverButton className="flex items-center gap-x-1 text-black focus:outline-none  ">
              Industies
              <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute top-12  z-10 mt-3 md:w-[80vh] overflow-hidden rounded-xl bg-black/90 backdrop-blur-lg ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4 py-4">
                {/* {premiumservices.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-row items-center justify-center gap-y-4 rounded-xl py-6 px-3 bg-emerald-900 text-white hover:text-black shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-white/80"
                >
             
                  <div className="flex flex-col items-center justify-center cursor-pointer">
                    <Link
                      href={item.href}
                      className="text-xl  font-semibold text-center transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-2 text-center text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))} */}
              </div>

              <div className="grid grid-cols-2 divide-x divide-gray-200 bg-white/50 backdrop-blur-sm">
                {/* {callsToAction.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-black hover:text-white justify-center gap-x-3 p-4 text-xl font-semibold  hover:bg-black transition-colors duration-200"
                >
                  <item.icon
                    aria-hidden="true"
                    className="w-8 h-8 text text-white group-hover:text-indigo-500 transition-colors duration-200"
                  />
                  {item.name}
                </Link>
              ))} */}
              </div>
            </PopoverPanel>
            <PopoverButton className="flex items-center gap-x-1 text-black focus:outline-none  ">
              Our Company
              <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute top-12  z-10 mt-3 md:w-[80vh] overflow-hidden rounded-xl bg-black/90 backdrop-blur-lg ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4 py-4">
                {/* {premiumservices.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-row items-center justify-center gap-y-4 rounded-xl py-6 px-3 bg-emerald-900 text-white hover:text-black shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-white/80"
                >
             
                  <div className="flex flex-col items-center justify-center cursor-pointer">
                    <Link
                      href={item.href}
                      className="text-xl  font-semibold text-center transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-2 text-center text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))} */}
              </div>

              <div className="grid grid-cols-2 divide-x divide-gray-200 bg-white/50 backdrop-blur-sm">
                {/* {callsToAction.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-black hover:text-white justify-center gap-x-3 p-4 text-xl font-semibold  hover:bg-black transition-colors duration-200"
                >
                  <item.icon
                    aria-hidden="true"
                    className="w-8 h-8 text text-white group-hover:text-indigo-500 transition-colors duration-200"
                  />
                  {item.name}
                </Link>
              ))} */}
              </div>
            </PopoverPanel>
            <PopoverButton className="flex items-center gap-x-1 text-black focus:outline-none  ">
              Careers
              <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute top-12  z-10 mt-3 md:w-[80vh] overflow-hidden rounded-xl bg-black/90 backdrop-blur-lg ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-4 py-4">
                {/* {premiumservices.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-row items-center justify-center gap-y-4 rounded-xl py-6 px-3 bg-emerald-900 text-white hover:text-black shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-white/80"
                >
             
                  <div className="flex flex-col items-center justify-center cursor-pointer">
                    <Link
                      href={item.href}
                      className="text-xl  font-semibold text-center transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-2 text-center text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))} */}
              </div>

              <div className="grid grid-cols-2 divide-x divide-gray-200 bg-white/50 backdrop-blur-sm">
                {/* {callsToAction.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-black hover:text-white justify-center gap-x-3 p-4 text-xl font-semibold  hover:bg-black transition-colors duration-200"
                >
                  <item.icon
                    aria-hidden="true"
                    className="w-8 h-8 text text-white group-hover:text-indigo-500 transition-colors duration-200"
                  />
                  {item.name}
                </Link>
              ))} */}
              </div>
            </PopoverPanel>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black"
              >
                {item.name}
              </Link>
            ))}
          </Popover>
        </PopoverGroup>

        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-6">
        <Link href="/wishlist" className="hover:text-emerald-200">
          <HeartIcon className="h-6 w-6" />
        </Link>
        <Link href="/cart" className="hover:text-emerald-200">
          <ShoppingCartIcon className="h-6 w-6" />
        </Link>
        <Link href="/profile" className="hover:text-emerald-200">
          <UserIcon className="h-6 w-6" />
        </Link>
      </div> */}

        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            key={item.name}
            href="/bookyourEvent"
            className=" text-black text-center text-xl uppercase"
          >
            Store
          </Link>
        </div> */}
      </nav>
    </header>
  );
};
