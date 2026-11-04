"use client";

import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../assets/Navbar/SST_Updated_White.svg";
import logo2 from "../../assets/Navbar/SST_Logo_Dark.svg";
import { isValidRoute } from "../Constants/Routes/routes";
// import LanguageSelector from "../languageselector/Language_selector.jsx";
import ContactUsButton from "../Contactusbutton/contact_us_button";
import BookAcallButton from "../BookAcallButton/BookAcall_button";
import CalendlyModal from "../CommonComponents/CommonCalendy";
import { MENUS } from "./menuLinks";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  // Which mobile-menu dropdown (by label) is expanded, if any.
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const lightThemeRoutes = ["/legal/privacy/", "/ascenduserrors/", "/legal/terms/"];

  const navLinkClass = `
                          relative py-2 px-3
                          transition-colors duration-300
                          text-[clamp(0.9rem,1vw,1rem)]
 
                          after:absolute
                          after:left-0
                          after:-bottom-1
                          after:h-[2px]
                          after:w-0
                          after:transition-[width]
                          after:duration-300
                          after:content-['']

                          hover:after:w-full
                        `;
  // The underline grows by width, not scale-x: a running transform puts the
  // 2px line on its own GPU layer, where a fractional y position blurs it
  // across an extra pixel row — thick while sliding, snapping thin once the
  // animation ends. Width keeps it painted the same way throughout.

  // No blue anywhere, active or hover — the underline is always after:bg-current,
  // so it (and the text above it) just match whatever color the link already is
  // in each navbar state (white on the dark/top-of-page navbar, black on the
  // scrolled/bright navbar). Active links show that line permanently
  // (after:w-full); inactive links reveal the same line on hover only
  // (via navLinkClass's hover:after:w-full).
  const activeLinkClass = "after:w-full after:bg-current";
  const inactiveLinkClass = "after:bg-current";

  const isLight = lightThemeRoutes.includes(pathname) || !isValidRoute(pathname);
  const isNavbarLight = isLight || isScrolled;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Always show navbar near the top of the page (within 10px)
      if (currentScrollY <= 10) {
        setVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Check threshold (at least 10px scroll difference) to prevent jitter
      const scrollDifference = currentScrollY - lastScrollY;
      if (Math.abs(scrollDifference) < 10) {
        return;
      }

      if (scrollDifference > 0) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileMenu(null);
  };


  return (
    <>
      <nav
        className={`w-full z-50 fixed top-0 left-0 transition-transform duration-300 ease-in-out ${visible || isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="max-w-full mx-auto">
          <div className="hidden lg:flex">
            <div
              className="
                relative
                lg:h-[80px]
                w-full
                flex items-center
                justify-between
                py-[24px]
              "
            >
              {/* Sibling background layer to avoid nested backdrop-filter bug */}
              <div
                className={`
                  absolute inset-0 -z-10
                  backdrop-blur-md
                  transition-all duration-500 ease-in-out
                  ${isNavbarLight
                    ? "bg-white/80 border-b border-gray-200/20 shadow-md"
                    : "bg-white/10 border-b border-white/10"
                  }
                `}
              />
              {/* Left Logo Area with SST and SAP logos */}
              {/* <div className="flex items-center gap-3 px-4 sm:px-8 lg:px-10">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="group flex items-center overflow-hidden"
                > */}
              {/* Icon */}
              {/* <div className="relative z-10 flex-shrink-0">
                    <Image
                      src={logo3}
                      alt="SST Icon"
                      width={124}
                      height={101}
                      className="h-8.5 w-auto object-contain transition-all duration-300 ease-out"
                    />
                  </div> */}

              {/* Company Name Reveal */}
              {/* <div
                    className="
                    w-0
                    ml-0
                    opacity-0
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-out
                    group-hover:w-[140px]
                    group-hover:ml-2.5
                    group-hover:opacity-100
                  "
                  >
                    <Image
                      src={isNavbarLight ? logo5 : logo4}
                      alt="SST"
                      width={344}
                      height={60}
                      className="block h-6 w-auto max-w-none object-contain"
                    />
                  </div>
                </Link> */}

              {/* Subtle vertical separator line */}
              {/* <div
                  className={`h-8 w-[1px] ${isNavbarLight ? "bg-gray-400/40" : "bg-white/20"
                    }`}
                /> */}

              {/* SAP Partner Logo */}
              {/* <Link href="/" className="flex items-center flex-shrink-0">
                  <Image
                    src="/sap-logo-svg.svg"
                    alt="SAP Partner Logo"
                    className="h-8.5 w-auto object-contain"
                    width={140}
                    height={40}
                  />
                </Link>
              </div> */}

              {/* Logo — row's left edge, 64px in. */}
              <div className="flex items-center pl-[64px]">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="group flex items-center overflow-hidden"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <Image
                      src={isNavbarLight ? logo2 : logo}
                      alt="Support Studio Technologies Logo"
                      width={180}
                      height={40}
                      className="h-8 sm:h-10 w-auto object-contain transition-all duration-300 ease-out"
                    />
                  </div>
                </Link>
              </div>

              {/* Nav links — pinned to the row's right edge, ending 64px in. Relative so
                  the What-we-do panel can anchor to this block's right edge. */}
              <div className="relative ml-auto pr-[64px]">
                <ul className="flex items-center gap-3">
                  <Link
                    href="/"
                    className={`${navLinkClass} ${pathname === "/" ? activeLinkClass : inactiveLinkClass} ${isNavbarLight ? "text-black" : "text-white"
                      }`}
                  >
                    Home
                  </Link>

                  {MENUS.map((menu) => (
                    <li key={menu.label} className="relative group">
                      <button
                        type="button"
                        className={`${navLinkClass} after:content-none flex items-center gap-1 ${isNavbarLight ? "text-black" : "text-white"
                          }`}
                      >
                        {menu.label}

                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
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

                      {/* Single-column list, so the panel opens straight under its own
                          trigger. The padding is the hover bridge between the trigger and
                          the panel, sized to land the panel flush against the navbar's
                          bottom edge (the trigger is centred in an 80px row, leaving
                          ~21px of slack beneath it). */}
                      <div
                        className="
                          invisible opacity-0 translate-y-3
                          group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                          transition-all duration-300
                          absolute left-0 top-full pt-[24px] z-50
                        "
                      >
                        <div
                          className={`shadow-2xl min-w-[260px] p-6 border transition-colors duration-500 backdrop-blur-xl ${isNavbarLight
                            ? "bg-white/80 border-gray-200/30 text-gray-800"
                            : "bg-white/10 border-white/20 text-white"
                            }`}
                        >
                          <ul className="space-y-2">
                            {menu.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className={`block px-2 py-1 rounded-md text-sm whitespace-nowrap transition ${isNavbarLight
                                    ? "hover:bg-gray-100 text-gray-700"
                                    : "hover:bg-white/10 text-white/80"
                                    }`}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}


                  <li>
                    <Link
                      href="/who-we-are"
                      className={`${navLinkClass} ${pathname === "/who-we-are/" ? activeLinkClass : inactiveLinkClass} ${isNavbarLight ? "text-black" : "text-white"
                        }`}
                    >
                      Who we are
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className={`${navLinkClass} ${pathname === "/contact/" ? activeLinkClass : inactiveLinkClass} ${isNavbarLight ? "text-black" : "text-white"
                        }`}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className={`${navLinkClass} ${pathname === "/careers/" ? activeLinkClass : inactiveLinkClass} ${isNavbarLight ? "text-black" : "text-white"
                        }`}
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Improved Mobile Layout Header */}
          <div className={`flex justify-between items-center lg:hidden w-full px-6 py-2.5 md:px-8 md:py-5 border-b shadow-md transition-all duration-500 ease-in-out backdrop-blur-md ${isNavbarLight
            ? "bg-white/80 border-gray-200/20 text-black shadow-md"
            : "bg-neutral-900/90 border-neutral-800/30 text-white"
            }`}>
            {/* Mobile menu toggle button */}
            <button
              className={`lg:hidden transition-colors duration-300 flex items-center justify-center p-2 ${isNavbarLight
                ? "text-black hover:bg-gray-100"
                : "text-white hover:bg-neutral-800"
                }`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <IoMdMenu className="text-3xl sm:text-4xl" />
            </button>

            <Link href="/" onClick={closeMenu} className="flex items-center p-2">
              <Image
                src={isNavbarLight ? logo2 : logo}
                alt="Support Studio Technologies Logo"
                className="h-8 sm:h-10 w-auto"
                width={180}
                height={40}
              />
            </Link>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 lg:hidden transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white z-[60] flex flex-col`}
      >
        <div className="flex justify-between items-center p-5">
          {/* Logo inside mobile menu */}
          <Link href="/" onClick={closeMenu}>
            <Image
              src={logo2}
              alt="Support Studio Technologies Logo"
              className="h-8 sm:h-10 w-auto"
              width={180}
              height={40}
            />
          </Link>
          {/* Right side controls (Close Menu button) */}
          <div className="flex items-center gap-3">
            {/* Language selector hidden for now (also disabled in desktop navbar) */}
            {/* <LanguageSelector isNavbarLight={true} /> */}
            {/* Close button */}
            <button onClick={closeMenu} aria-label="Close menu" className="flex items-center justify-center">
              <IoMdClose className="text-3xl sm:text-4xl text-black" />
            </button>
          </div>
        </div>

        {/* Menu items */}
        <div className="flex-1 overflow-y-auto px-5 py-8">
          <ul className="flex flex-col gap-6">
            <li>
              <Link
                href="/"
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 ${pathname === "/"
                  ? "text-[#2d8ec5] bg-gray-100"
                  : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            {MENUS.map((menu) => {
              const isOpen = openMobileMenu === menu.label;
              const isActive = menu.items.some((item) => pathname.startsWith(item.href));

              return (
                <li key={menu.label}>
                  <button
                    type="button"
                    onClick={() => setOpenMobileMenu(isOpen ? null : menu.label)}
                    className={`w-full flex items-center justify-between py-3 px-4 text-2xl sm:text-3xl font-medium text-left transition-colors duration-300 ${isActive
                      ? "text-[#2d8ec5] bg-gray-100"
                      : "text-gray-800 hover:text-[#2d8ec5]"
                      }`}
                    aria-expanded={isOpen}
                  >
                    {menu.label}
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
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

                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px] mt-2" : "max-h-0"
                      }`}
                  >
                    <ul className="bg-gray-50 border border-gray-200 py-3">
                      {menu.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className="block pl-8 pr-4 py-2 text-gray-600 hover:text-[#2d8ec5]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}

            <li>
              <Link
                href="/who-we-are"
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 ${pathname === "/who-we-are/"
                  ? "text-[#2d8ec5] bg-gray-100"
                  : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                onClick={closeMenu}
              >
                Who we are
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 ${pathname === "/contact/"
                  ? "text-[#2d8ec5] bg-gray-100"
                  : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 ${pathname === "/careers/"
                  ? "text-[#2d8ec5] bg-gray-100"
                  : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                onClick={closeMenu}
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
        {/* Book a call — not wanted in the navbar for now. The desktop instance above
            was already commented out; this was the last live one (the floating button
            inside the open mobile menu). The import and the Calendly modal below are
            left in place so this is a one-line revert when it's wanted again. The
            ContactUsButton that sat alongside it here was already commented out before
            this, and is dropped from the block rather than nested inside the comment. */}
        {/* {isMenuOpen && (
          <div className="lg:hidden fixed bottom-6 right-6 z-[70]">
            <BookAcallButton setShowCalendly={setShowCalendly} />
          </div>
        )} */}
      </div>
      {/* Spacer to prevent content overlap */}
      <div className="h-[64px] lg:h-[68px] w-full" />

      {/* Calendly Modal */}
      <CalendlyModal
        isOpen={showCalendly}
        onClose={() => setShowCalendly(false)}
        calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL}
        pageSettings={{
          backgroundColor: "ffffff",
          primaryColor: "#2d8ec5",
          textColor: "#2d8ec5",
        }}
      />
    </>
  );
};

export default Navbar;