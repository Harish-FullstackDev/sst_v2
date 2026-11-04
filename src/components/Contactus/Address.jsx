import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import careercall from "../../assets/contactus/careercall.svg";
import careermsg from "../../assets/contactus/careermsg.svg";
import InteractiveLocationPreview from "./InteractiveLocationPreview";
import careerlocation from "../../assets/contactus/careerlocation.svg";

const ContactInfo = () => {
  const [pinBounced, setPinBounced] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const triggerRef = useRef(null);
  const handleClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsBottomSheetOpen(true);
    }
  };
  return (
    <div className="bg-white py-8 lg:py-12">
      <div className="max-w-md">
        <h2 className="text-xl lg:text-2xl text-[#2E3033] font-semibold mb-2">
          Contact Information
        </h2>
        <p className="text-[#55595E] font-light mb-8 lg:mb-12">
          We're here to help. Reach out using the details below.
        </p>

        <div className="space-y-6 lg:space-y-8">
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 flex-shrink-0">
              <Image
                src={careercall}
                alt="Phone"
                width={24}
                height={24}
                className="text-gray-700"
              />
            </div>
            <span className="text-gray-700 text-base">
              <a className="hover:text-blue-500 transition-colors duration-200" href="tel:+914132191301" target="_blank">0413-2191301</a></span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 flex-shrink-0">
              <Image
                src={careermsg}
                alt="Email"
                width={24}
                height={24}
                className="text-gray-700"
              />
            </div>
            <div className="text-gray-700 text-base">
              <div>
                <a className="hover:text-blue-500 transition-colors duration-200" href="mailto:info@isupportz.com" target="_blank">info@isupportz.com</a></div>
            </div>
          </div>



          {/* regional headquarters */}
          <div className="flex items-start gap-4">
            {/* Location Pin */}
            <div className="relative w-6 h-6 flex-shrink-0 mt-1">
              <motion.div
                animate={
                  pinBounced || isOpen
                    ? {
                      y: [0, -6, 0],
                      transition: { duration: 0.45, ease: "easeInOut" },
                    }
                    : {}
                }
                className="w-full h-full flex items-center justify-center relative z-10"
              >
                <Image
                  src={careerlocation}
                  alt="Location Pin Icon"
                  width={24}
                  height={24}
                  className="pointer-events-none"
                />
              </motion.div>
            </div>

            {/* Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=192+Kamaraj+Salai+Puducherry+605013"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-700 text-base leading-relaxed hover:text-blue-500 transition-colors duration-200"
            >
              <p className="text-[#2E3033] font-semibold">Regional Headquarters</p>
              <p>
                #192, Kamaraj Salai, <br /> Puducherry, India, <br /> Pin Code - 605013
              </p>
            </a>
          </div>

          {/* delivery center */}
          <div className="flex items-start gap-4">
            <div className="relative w-6 h-6 flex-shrink-0 mt-1">
              <Image
                src={careerlocation}
                alt="Location Pin Icon"
                width={24}
                height={24}
                className="pointer-events-none"
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Riyadh+Saudi+Arabia"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-700 text-base leading-relaxed hover:text-blue-500 transition-colors duration-200"
            >
              <p className="text-[#2E3033] font-semibold">Delivery Center</p>
              <p>Riyadh, KSA</p>
            </a>
          </div>
          {/* Address with Interactive Location Preview */}
          {/* <InteractiveLocationPreview /> */}

        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
