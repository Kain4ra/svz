import React from "react";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedBlock from "./AnimatedBlock";
import Image from "next/image";
import webflow from "@/public/webflow.jpg";
import { ArrowInfo, SemiCircle } from "./Figures";
import Link from "next/link";
import InfinityFlicker from "./InfinityFlicker";

const Resources = () => {
  return (
    <section id="resources" className="mb-20">
      <AnimatedHeading title={["re", "s", "o", "u", "r", "ce", "s"]} />
      <AnimatedBlock>
        <div className="flex">
          <div className="relative w-[400px] pt-5 mr-16">
            <Image className="w-full h-auto" src={webflow} alt="webflow" />
            <button
              type="submit"
              className="absolute left-1/2 -translate-x-1/2 bottom-44 py-4 pr-5 pl-7 font-semibold border border-white group duration-300 active:scale-95"
            >
              <span className="absolute left-3 top-[20px] group-hover:left-4 duration-300">
                <ArrowInfo />
              </span>
              Why Webflow?
            </button>
          </div>
          <div className="relative pt-40">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[200px] flex flex-col items-start justify-center w-48 mx-auto">
              <h3 className="mb-4 text-5xl font-semibold">FAQs</h3>
              <div className="mb-3 font-light text-white/75">
                <span className="inline-block">
                  Questions about working with SVZ?
                </span>{" "}
                <span className="inline-block">We have you covered.</span>
              </div>
              <Link
                href={"/"}
                className="flex justify-start items-center gap-3 w-[127px] font-light hover:gap-1 hover:pl-2 duration-300"
              >
                <ArrowInfo />
                <span className="pt-0.5 tracking-widest">Get answers</span>
              </Link>
            </div>
            <InfinityFlicker className="rotate-180 pointer-events-none">
                <SemiCircle />
            </InfinityFlicker>
            <InfinityFlicker delay={4} className="pointer-events-none">
                <SemiCircle />
            </InfinityFlicker>
          </div>
        </div>
      </AnimatedBlock>
    </section>
  );
};

export default Resources;
