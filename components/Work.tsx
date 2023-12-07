import React from "react";
import AnimatedHeading from "./AnimatedHeading";
import pic1 from "@/public/zendrive.jpg";
import pic2 from "@/public/coreSite.jpg";
import pic3 from "@/public/search.jpg";
import pic4 from "@/public/whiteboard.jpg";
import WorkCard from "./WorkCard";
import { ArrowInfo } from "./Figures";
import Link from "next/link";

const Work = () => {
  return (
    <section id="work">
      <AnimatedHeading title={["w", "o", "r", "k"]} />
      <div className="grid grid-cols-2 gap-x-36 pr-32 mb-16">
        <WorkCard
          x={0}
          y={0}
          className="mb-28"
          img={pic1}
          title="Zendrive"
          summary="Zendrive’s sleek, professional website was designed to reflect a company that uses cutting edge technology to create solutions for their clients."
        />
        <WorkCard
          x={-584}
          y={-112}
          className="mt-28"
          img={pic2}
          title="CoreSite"
          summary="Design, Webflow Development, and CMS Training"
        />
        <WorkCard
          x={0}
          y={-890}
          className="mb-28"
          img={pic3}
          title="Search.io"
          summary="Looking for a complete design overhaul, search engine solutions company Search.io turned to SVZ"
        />
        <WorkCard
          x={-584}
          y={-900}
          className="mt-28"
          img={pic4}
          title="Whiteboard"
          summary="We supported these creative agency superheros on developing their new agency marketing website."
        />
      </div>
      <Link href={'/'} className="flex justify-start items-center gap-3 w-[175px] font-light hover:gap-1 hover:pl-2 duration-300">
      <ArrowInfo />
      <span className="pt-0.5 tracking-widest">Other recent work</span>
    </Link>
    </section>
  );
};

export default Work;
