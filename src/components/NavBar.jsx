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
      {/* Prevents content shift when navbar becomes fixed */}
      {isScrolled && <div className="h-0"></div>}
      <div
        className={`w-full top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "sticky shadow-md bg-white" : "relative"
        }`}
      >
        <TrainMovement />
        <Disclosure
          as="nav"
          className="p-5 w-full bg-white border-b border-gray-300 transition-all duration-300"
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-15">
                <div className="relative flex h-16 items-center justify-between">
                  {/* Logo */}
                  <div className="flex items-center">
                    <a href="/">
                      <img alt="Your Company" src={TrainLogo} />
                    </a>
                  </div>

                  {/* Mobile Menu Button */}
                  <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
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
                  <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                    <div className="flex space-x-4 md:space-x-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="rounded-md px-3 md:px-2 py-2 text-sm md:text-sm font-medium text-[#01320A]"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Register and Sign In Buttons */}
                  <div className="hidden lg:flex lg:items-center lg:space-x-2">
                    <a
                      href="/signup"
                      className="px-4 py-2 md:px-3 md:py-1 text-sm md:text-sm font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-100"
                    >
                      Register
                    </a>
                    <a
                      href="/signin"
                      className="px-4 py-2 md:px-3 md:py-1 text-sm md:text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
                    >
                      Sign In
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Panel */}
              <DisclosurePanel className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base text-center font-medium text-[#01320A]"
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
                      href="/login"
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
