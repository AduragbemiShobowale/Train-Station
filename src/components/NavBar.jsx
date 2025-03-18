// NavBar.jsx
import { useState, useEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../contexts/AuthContext.jsx";
import TrainLogo from "../assets/icon/TrainLogo.png";
import TrainMovement from "./TrainMovement";
import TheModals from "./TheModals.jsx";
import PassChange from "./PassChange.jsx";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Time Tables", href: "/timetable" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact Us", href: "/contactus" },
];

export default function NavBar() {
  const { auth } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPassChangeModalOpen, setIsPassChangeModalOpen] = useState(false);

  const isAuthenticated = !!auth?.user;
  const userProfile = auth?.user;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMobileDropdownToggle = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  const handleLogoutConfirm = () => {
    setIsModalOpen(false);
    // Add any additional logic after logout if needed
  };

  const handleLogoutCancel = () => {
    setIsModalOpen(false);
  };

  // Function to close dropdown after selection
  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false); // Ensure mobile dropdown closes
  };

  // Function to handle password change modal
  const handleResetPassword = () => {
    setIsPassChangeModalOpen(true);
    closeDropdown();
  };

  return (
    <>
      {isScrolled && <div className="h-0" />}

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
                  <div className="flex items-center">
                    <a href="/">
                      <img alt="Train Logo" src={TrainLogo} />
                    </a>
                  </div>

                  <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                    <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="size-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="size-6" aria-hidden="true" />
                      )}
                    </DisclosureButton>
                  </div>

                  <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                    <div className="flex space-x-4 md:space-x-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="rounded-md px-3 md:px-2 py-2 text-sm font-medium text-[#01320A]"
                          onClick={closeDropdown}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="hidden lg:flex lg:items-center lg:space-x-2">
                    {!isAuthenticated ? (
                      <>
                        <a
                          href="/signup"
                          className="px-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-100"
                          onClick={closeDropdown}
                        >
                          Register
                        </a>
                        <a
                          href="/signin"
                          className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
                          onClick={closeDropdown}
                        >
                          Sign In
                        </a>
                      </>
                    ) : (
                      <div className="relative">
                        <button
                          onClick={handleDropdownToggle}
                          className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[#01320A] border border-transparent rounded-md hover:bg-gray-50"
                        >
                          <span className="bg-green-100 text-green-600 font-bold rounded-full w-8 h-8 flex items-center justify-center">
                            {userProfile?.firstName?.[0]}
                            {userProfile?.lastName?.[0]}
                          </span>
                          <span>{`${userProfile?.firstName} ${userProfile?.lastName}`}</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {isDropdownOpen && (
                          <div className="absolute right-0 w-48 mt-2 bg-white shadow-lg rounded-md">
                            <div className="py-1">
                              <a
                                href="/tickets"
                                className="text-[#01320A] block px-4 py-2 text-sm hover:bg-gray-100"
                                onClick={closeDropdown}
                              >
                                My Tickets
                              </a>
                              <a
                                className="text-[#01320A] block px-4 py-2 text-sm hover:bg-gray-100"
                                onClick={handleResetPassword}
                              >
                                Reset Password
                              </a>
                              <button
                                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                                onClick={() => {
                                  setIsModalOpen(true);
                                  closeDropdown();
                                }}
                              >
                                Log Out
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

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

                  {!isAuthenticated ? (
                    <div className="mt-4 space-y-2">
                      <a
                        href="/signup"
                        className="block w-full text-center rounded-md border border-green-600 px-3 py-2 text-base font-medium text-green-600 hover:bg-green-100"
                        onClick={closeDropdown}
                      >
                        Register
                      </a>
                      <a
                        href="/signin"
                        className="block w-full text-center rounded-md bg-green-600 px-3 py-2 text-base font-medium text-white hover:bg-green-700"
                        onClick={closeDropdown}
                      >
                        Sign In
                      </a>
                    </div>
                  ) : (
                    <div className="mt-4 space-y-2 text-center">
                      <button
                        onClick={handleMobileDropdownToggle}
                        className="flex items-center justify-center w-full gap-2 px-3 py-2 text-base font-medium text-[#01320A] border border-transparent rounded-md hover:bg-gray-50"
                      >
                        <span className="bg-green-100 text-green-600 font-bold rounded-full w-8 h-8 flex items-center justify-center">
                          {userProfile?.firstName?.[0]}
                          {userProfile?.lastName?.[0]}
                        </span>
                        <span>{`${userProfile?.firstName} ${userProfile?.lastName}`}</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isMobileDropdownOpen && (
                        <div className="mt-2 space-y-2">
                          <a
                            href="/tickets"
                            className="block px-4 py-2 text-sm text-[#01320A] hover:bg-gray-100"
                            onClick={closeDropdown}
                          >
                            My Tickets
                          </a>
                          <a
                            className="block px-4 py-2 text-sm text-[#01320A] hover:bg-gray-100"
                            onClick={handleResetPassword}
                            
                          >
                            Reset Password
                          </a>
                          <button
                            className="block px-4 py-2 text-sm text-gray-700 w-full hover:bg-gray-100"
                            onClick={() => {
                              setIsModalOpen(true);
                              closeDropdown();
                            }}
                          >
                            Log Out
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>

      {/* Logout Modal */}
      <TheModals
        isOpen={isModalOpen}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />

      {/* Password Change Modal */}
      <PassChange
        isOpen={isPassChangeModalOpen}
        onClose={() => setIsPassChangeModalOpen(false)}
      />
    </>
  );
}
