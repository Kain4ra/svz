import Link from "next/link";
import React from "react";
import icon from "@/public/linkedIn.svg";
import Image from "next/image";

const navItems = ["Home", "Process", "Work", "Resources", "Privacy"];

const Footer = () => {
  return (
    <footer id="contact" className="flex items-center w-[1440px] h-[350px] mx-auto pl-72">
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col justify-between items-start">
          <ul className="flex mb-5 text-sm">
            {navItems.map((item, index) => {
              return (
                <>
                  <li
                    key={`${item}-${index}.footer`}
                    className="uppercase text-white/75 hover:text-white duration-200"
                  >
                    <Link href={`#${item.toLowerCase()}`}>{item}</Link>
                  </li>
                  {index !== navItems.length - 1 && (
                    <span
                      key={`${item}-${index}.span`}
                      className="mx-2 text-white/75 select-none"
                    >
                      /
                    </span>
                  )}
                </>
              );
            })}
          </ul>
          <div className="w-[274px] text-sm text-white/75">
            © 2021 SVZ Design, All Rights Reserved San Francisco - Los Angeles -
            Seattle
          </div>
        </div>
        <Link href={"/"} className="mt-3 mr-16">
          <Image src={icon} alt="linkedIn" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
