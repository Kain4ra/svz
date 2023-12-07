import React from "react";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedBlock from "./AnimatedBlock";
import { ArrowInfo, ProcessCircle, ProcessEgg, ProcessSquare, ProcessTriangels } from "@/components/Figures";
import Link from "next/link";

const Process = () => (
  <section>
    <AnimatedHeading title={["p", "r", "o", "ce", "ss"]} />
    <div className="grid grid-cols-4 mb-16">
      <AnimatedBlock>
        <div className="relative h-[600px] pt-10  px-12 border border-white/30">
          <h3 className="text-4xl font-semibold mb-9">Discovery</h3>
          <p className="text-white/75">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other, discuss your current and
            future objectives, and recommend the best course of action.
          </p>
          <ProcessCircle className="absolute bottom-20" />
        </div>
      </AnimatedBlock>
      <AnimatedBlock delay={0.3}>
        <div className="relative h-[600px] pt-10  px-12 border border-white/30">
          <h3 className="text-4xl font-semibold mb-9">Strategy</h3>
          <p className="text-white/75">
            Every end-to-end project of ours begins with a bespoke pre-build
            strategy. From brand ID consultation to in-depth code reviews
            we're here to set the stage for success.
          </p>
          <ProcessSquare className="absolute bottom-20" />
        </div>
      </AnimatedBlock>
      <AnimatedBlock delay={0.6}>
        <div className="relative h-[600px] pt-10  px-12 border border-white/30">
          <h3 className="text-4xl font-semibold mb-9">Design</h3>
          <p className="text-white/75">
            After we have a comprehensive understanding of your brand, we'll
            be ready to move onto design. Each page or asset will be designed,
            reviewed, and given your stamp of approval.
          </p>
          <ProcessEgg className="absolute bottom-20" />
        </div>
      </AnimatedBlock>
      <AnimatedBlock delay={0.9}>
        <div className="relative h-[600px] pt-10 px-12 border border-white/30">
          <h3 className="text-4xl font-semibold mb-9">Build</h3>
          <p className="text-white/75">
            Whether we've just finished designing your new site or you're
            handing off finished designs for us to develop in Webflow, we're
            here to apply our trusted development process to your project.
          </p>
          <ProcessTriangels className="absolute bottom-20" />
        </div>
      </AnimatedBlock>
    </div>
    <Link href={'/'} className="flex justify-start items-center gap-3 w-[113px] font-light hover:gap-1 hover:pl-2 duration-300">
      <ArrowInfo />
      <span className="pt-0.5 tracking-widest">Read more</span>
    </Link>
  </section>
);

export default Process;
