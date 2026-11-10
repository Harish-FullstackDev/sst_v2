"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/Navbar/SST_Updated_White.svg";
import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import FBIcon from "../../assets/Footer/FacebookIcon.svg";
import InstagramIcon from "../../assets/Footer/Instagram_Icon.svg";
import LinkedinIcon from "../../assets/Footer/LinkedIn_Icon.svg";
import TwitterIcon from "../../assets/Footer/X_Icon.svg";
import { MENUS } from "@/components/Navbar/menuLinks";
// import CalendlyIcon from "../../assets/Footer/CalendlyIcon.svg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSendEmail = () => {
    if (email) {
      console.log("Sending email to:", email);
      setEmail("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendEmail();
    }
  };

  return (
    <>
      <footer className="bg-neutral-900 text-gray-400 px-8 py-8 md:px-16 md:pt-16 md:pb-9">
        <div className="relative h-8 w-auto aspect-[358.7/80] mb-6 md:hidden">
          <Image
            src={logo}
            alt="Support Studio Technologies logo"
            fill
            style={{
              objectFit: "contain",
              objectPosition: "left",
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16  pb-4 md:pb-12 mb-2">
          <div className="md:col-span-1">
            {/* Logo — first column, so its left edge shares Quick Link's 64px inset.
                h-10 (40px) + 46px margin = the 86px (mt-21.5) every other column's
                heading drops by, so Quick Link stays level with them. */}
            <div className="hidden md:block relative h-10 w-auto aspect-[358.7/80] mb-[46px]">
              <Image
                src={logo}
                alt="Support Studio Technologies logo"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "left",
                }}
              />
            </div>
            {/* Quick Link */}
            <div className="mt-4 md:mt-0 mb-7.5 md:mb-12">
              <h2 className="text-white text-base font-semibold mb-4">
                Quick Link
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors duration-200"
                  >
                    What we do
                  </Link>
                </li> */}

                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>

                {/* <li>
                  <Link
                    href="/solutions"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Solutions
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Careers
                  </Link>
                </li>
                {/* <li>
                <Link
                  href="/sst-partner"
                  className="hover:text-white transition-colors duration-200"
                >
                  SST Partnership
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white hover:underline-offset-8 transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/trustcenter"
                  className="hover:text-white transition-colors duration-200"
                >
                  Trust Center
                </Link>
              </li> */}
                <li>
                  <Link
                    href="/book-a-consultation"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Book a call
                  </Link>
                </li>
                {/* <li>
                <Link
                  href="#contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#careers"
                  className="hover:text-white transition-colors duration-200"
                >
                  News Letter
                </Link>
              </li> */}
              </ul>
            </div>

            {/* <div className="flex space-x-3 md:col-span-1">
              {/* <a
              href="https://www.linkedin.com/company/supportstudiotechnologies/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                className="w-10 h-10"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="Twitter"
            >
              <Image
                src={TwitterIcon}
                alt="Twitter"
                className="w-10 h-10"
                width={24}
                height={24}
              />
            </a> */}
            {/* </div> */}
          </div>


          {/* Services and Solutions — same lists as the navbar dropdowns. */}
          {MENUS.map((menu) => (
            <div key={menu.label} className="md:col-span-1">
              <h2 className="text-white text-base font-semibold md:mt-21.5 mb-4">{menu.label}</h2>
              <ul className="space-y-2">
                {menu.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Industries */}
          {/* <div className="md:col-span-1">
            <h2 className="text-white text-base font-semibold md:mt-21.5 mb-4">Industries</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/sapService/rise-with-sap"
                  className="hover:text-white transition-colors duration-200"
                >
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/enterpriseTransformation"
                  className="hover:text-white transition-colors duration-200"
                >
                  Construction & EPC
                </Link>
              </li>
              <li>
                <Link
                  href="#product"
                  className="hover:text-white transition-colors duration-200"
                >
                  Oil & Gas
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Retail
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Government
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Utilities
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Financial Services
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Real Estate
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Support */}
          <div className="md:col-span-1 ">
            <h2 className="text-white text-base font-semibold md:mt-21.5 mb-4">Insights</h2>
            <ul className="space-y-2">
              {/* <li>
                <Link
                  href="#compliance"
                  className="hover:text-white transition-colors duration-200"
                >
                  Compliance
                </Link>
              </li> */}
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-white transition-colors duration-200"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/industry-reports"
                  className="hover:text-white transition-colors duration-200"
                >
                  Industry Reports
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="md:col-span-1">
            <h2 className="text-white text-base font-semibold md:mt-21.5 mb-4">
              Get In Touch
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+914132191301"
                  className="hover:text-white transition-colors duration-200"
                >
                  0413-2191301
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@isupportz.com"
                  className="break-all hover:text-white transition-colors duration-200"
                >
                  info@isupportz.com
                </a>
              </li>
              <li>
                <p>
                  Headquarters
                </p>
              </li>
              <li>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=192+Kamaraj+Salai+Puducherry+605013"
                  className="hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  #192, Kamaraj Salai, Puducherry, India, <br /> Pin Code - 605013

                </a>
              </li>
            </ul>
            {/* <div className="w-full max-w-xs mt-24 space-y-3">
              <label className="text-white text-sm sm:text-base font-normal block text-start">
                News Letter
              </label>

              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your email address"
                  className="w-full pr-10 px-3 sm:px-4 py-2 sm:py-3  border-b border-white/20 rounded-none text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                />
                <MdOutlineMailOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-lg" />
              </div>
            </div> */}
            <div className="flex space-x-3 md:col-span-1 min-h-[50px] mb-2 mt-4">
              <a
                href="https://www.linkedin.com/company/supportstudiotechnologies/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Image
                  src={LinkedinIcon}
                  alt=""
                  className="w-10 h-10"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://www.instagram.com/isupportz.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Image
                  src={InstagramIcon}
                  alt=""
                  className="w-10 h-10"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://x.com/isupportz?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Image
                  src={TwitterIcon}
                  alt=""
                  className="w-10 h-10"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

        </div>

        {/* Legal row — links above the copyright, right-aligned under a hairline rule. */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col items-center md:items-end gap-3 text-sm text-white text-center md:text-right">
          <p className="flex flex-wrap justify-center md:justify-end gap-x-2 gap-y-1">
                <a href="/legal/terms" className="whitespace-nowrap hover:text-gray-300 transition-colors">
                  Terms & Conditions
                </a>
                <span aria-hidden="true">|</span>
                <a href="/legal/privacy" className="whitespace-nowrap hover:text-gray-300 transition-colors">
                  Privacy Policy
                </a>
                <span aria-hidden="true">|</span>
                <a href="/legal/security" className="whitespace-nowrap hover:text-gray-300 transition-colors">
                  Security Policy
                </a>
                <span aria-hidden="true">|</span>
                <a href="/legal/cookies" className="whitespace-nowrap hover:text-gray-300 transition-colors">
                  Cookie Policy
                </a>
                <span aria-hidden="true">|</span>
                <a href="/legal/disclaimer" className="whitespace-nowrap hover:text-gray-300 transition-colors">
                  Disclaimer
                </a>
          </p>
          <p className="md:whitespace-nowrap">© 2026 Support Studio Technologies. All Rights Reserved.</p>
        </div>
      </footer >
    </>
  );
};

export default Footer;
