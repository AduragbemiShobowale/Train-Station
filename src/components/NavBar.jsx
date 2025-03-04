import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TrainLogo from "../assets/icon/TrainLogo.png";
import TrainMovement from "./TrainMovement";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Time Tables", href: "/timetable" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact Us", href: "/contactus" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Placeholder to prevent content shift when navbar becomes fixed */}
      {isScrolled && <div className="h-16"></div>}
      <div
        className={`w-full top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "fixed shadow-md bg-white" : "sticky"
        }`}
      >
        <TrainMovement />
        <Disclosure
          as="nav"
          className={`p-5 w-full bg-white border-b border-gray-300 transition-all duration-300 `}
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  {/* Logo */}
                  <div className="flex items-center">
                    <img alt="Your Company" src={TrainLogo} />
                  </div>

                  {/* Mobile Menu Button */}
                  <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="size-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="size-6" aria-hidden="true" />
                      )}
                    </DisclosureButton>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden sm:flex sm:flex-1 sm:justify-center">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="rounded-md px-3 py-2 text-sm font-medium text-[#01320A]"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Register and Sign In Buttons */}
                  <div className="hidden sm:flex sm:items-center sm:space-x-4">
                    <a
                      href="/register"
                      className="px-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-100"
                    >
                      Register
                    </a>
                    <a
                      href="/signin"
                      className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
                    >
                      Sign In
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Panel */}
              <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 text-white">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-[#01320A]"
                    >
                      {item.name}
                    </a>
                  ))}

                  {/* Register and Sign In Buttons in Mobile Menu */}
                  <div className="mt-4 space-y-2">
                    <a
                      href="/register"
                      className="block w-full text-center rounded-md border border-green-600 px-3 py-2 text-base font-medium text-green-600 hover:bg-green-100"
                    >
                      Register
                    </a>
                    <a
                      href="/signin"
                      className="block w-full text-center rounded-md bg-green-600 px-3 py-2 text-base font-medium text-white hover:bg-green-700"
                    >
                      Sign In
                    </a>
                  </div>
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
