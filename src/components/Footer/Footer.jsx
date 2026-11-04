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
      <footer className="bg-neutral-900 text-gray-400 p-8 md:p-16 ">
        <div className="relative h-8 w-auto aspect-[358.7/80] mb-6 md:hidden">
          <Image
            src={logo}
            alt="Support Studio Technologies Logo"
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
                alt="Support Studio Technologies Logo"
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
                    href="/who-we-are"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Who we are
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
                  href="/ascenduspartner"
                  className="hover:text-white transition-colors duration-200"
                >
                  Ascendus Partnership
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
              href="https://www.linkedin.com/company/ascendus-company/?viewAsMember=true"
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


          {/* Capabilities column 1 */}
          <div className="md:col-span-1">
            <h2 className="text-white text-base font-semibold md:mt-21.5 mb-4">Capabilities</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/what-we-do/enterprise-transformation"
                  className="hover:text-white transition-colors duration-200"
                >
                  Enterprise Transformation
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/artificial-intelligence"
                  className="hover:text-white transition-colors duration-200"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/cloud-infrastructure"
                  className="hover:text-white transition-colors duration-200"
                >
                  Cloud & Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/data-intelligence"
                  className="hover:text-white transition-colors duration-200"
                >
                  Data & Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/digital-engineering"
                  className="hover:text-white transition-colors duration-200"
                >
                  Digital Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/customer-experience"
                  className="hover:text-white transition-colors duration-200"
                >
                  Customer Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities column 2 */}
          <div className="md:col-span-1">
            {/* <h2 className="text-white text-base font-semibold md:mt-21.5 mb-4">Industries</h2> */}
            <ul className="space-y-2 md:mt-32.5">
              <li>
                <Link
                  href="/what-we-do/experience-design"
                  className="hover:text-white transition-colors duration-200"
                >
                  Experience Design
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/intelligent-automation"
                  className="hover:text-white transition-colors duration-200"
                >
                  Intelligent Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/cybersecurity-digital-trust"
                  className="hover:text-white transition-colors duration-200"
                >
                  Cybersecurity & Digital Trust
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/managed-services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Managed Services
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/business-advisory"
                  className="hover:text-white transition-colors duration-200"
                >
                  Business Advisory
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-do/innovation-emerging-technologies"
                  className="hover:text-white transition-colors duration-200"
                >
                  Innovation & Emerging Technologies
                </Link>
              </li>
            </ul>
          </div>

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
                  href="/whitepapers"
                  className="hover:text-white transition-colors duration-200"
                >
                  Whitepapers
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
                  href="tel:+966573956334"
                  className="hover:text-white transition-colors duration-200"
                >
                  +966 573956334
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ascendus.sa"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@ascendus.sa
                </a>
              </li>
              <li>
                <p>
                  Headquarters
                </p>
              </li>
              <li>

                <a
                  href="https://maps.app.goo.gl/r13crYbGJBBuQiSE7"
                  className="hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  7731 King Saud Ibn Abdulaziz Saud, 2839 Al Murabba Dist., <br /> Riyadh 12624, KSA

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
                href="https://www.linkedin.com/company/ascendus-company/?viewAsMember=true"
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
                href="https://www.instagram.com/ascendus.ksa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Image
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-10 h-10"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://x.com/ascendus_ksa"
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            </div>
          </div>

        </div>

        {/* policy — same 5-column grid as the link row above, placed in column 5 so
            it lines up under Get In Touch */}
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-16">

          <div className="md:col-start-5">
            <div className="space-x-3 md:col-span-1">
              <p className="text-sm text-white mb-4 md:mb-0">
                <a
                  href="/legal/terms"
                  className="whitespace-nowrap hover:text-gray-300 transition-colors"
                >
                  Terms & Conditions
                </a>
                {" | "}
                <a
                  href="/legal/privacy"
                  className="whitespace-nowrap hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </a>
                <br />
                <a
                  href="/legal/security"
                  className="whitespace-nowrap hover:text-gray-300 transition-colors"
                >
                  Security Policy
                </a>
                {" | "}
                <a
                  href="/legal/cookies"
                  className="whitespace-nowrap hover:text-gray-300 transition-colors"
                >
                  Cookie Policy
                </a>
              </p>
            </div>
            {/* One line, as on sst_website_current. It runs a little past the narrow
                Get In Touch column into the footer padding, which only leaves room from
                ~1400px up; below that it breaks between the two halves, never mid-phrase. */}
            <p className="text-sm text-white min-h-[50px] pt-4 min-[1400px]:whitespace-nowrap">
              <span className="whitespace-nowrap">© 2026 Ascendus.</span>{" "}
              <span className="whitespace-nowrap">All Rights Reserved.</span>
            </p>
          </div>




          {/* <a
              href="https://www.linkedin.com/company/ascendus-company/?viewAsMember=true"
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
              href="https://www.instagram.com/ascendus.ksa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="Instagram"
            >
              <Image
                src={InstagramIcon}
                alt="Instagram"
                className="w-10 h-10"
                width={24}
                height={24}
              />
            </a> */}
          {/* <a
              href="https://calendly.com/ascendus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="Calendly"
            >
              <Image
                src={CalendlyIcon}
                alt="Calendly"
                className="w-10 h-10"
                width={24}
                height={24}
              />
            </a> */}

          {/* <div className="flex space-x-3 md:col-span-1 min-h-[50px] mb-2">
            <a
              href="https://www.linkedin.com/company/ascendus-company/?viewAsMember=true"
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
              href="https://www.instagram.com/ascendus.ksa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="Instagram"
            >
              <Image
                src={InstagramIcon}
                alt="Instagram"
                className="w-10 h-10"
                width={24}
                height={24}
              />
            </a>
          </div> */}
          {/* <div className="md:col-span-2 ">
            <div className="space-x-3 md:col-span-1">
              <p className="text-sm text-white mb-4 md:mb-0">
                <a
                  href="/legal/terms"
                  className="hover:text-gray-300 transition-colors"
                >
                  Terms & Conditions
                </a>
                {" | "}
                <a
                  href="/legal/privacy"
                  className="hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </a>
                <br />
                <a
                  href="/legal/security"
                  className="hover:text-gray-300 transition-colors"
                >
                  Security Policy
                </a>
                {" | "}
                <a
                  href="/legal/cookies"
                  className="hover:text-gray-300 transition-colors"
                >
                  Cookie Policy
                </a>
              </p>
            </div>
            <p className="text-sm text-white min-h-[50px] pt-4">
              © 2026 Ascendus. All Rights Reserved.
            </p>
          </div> */}
        </div>
      </footer >
    </>
  );
};

export default Footer;
