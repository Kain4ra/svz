"use client";
import { motion } from "framer-motion";

const AnimatedHeading = ({ title }: { title: string[] }) => {
  return (
    <motion.div
      className="flex justify-start items-end h-52"
      initial={{ x: "-400px", opacity: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn' }}
      viewport={{once: true}}
    >
      <motion.h2
        className="flex flex-col justify-normal items-start origin-bottom-left"
        whileInView={{ rotate: "-90deg" }}
        transition={{ delay: .8, duration: .3 }}
        viewport={{once: true}}
      >
        {title.map((item) => {
          return <span key={item} className="uppercase font-semibold text-xl">{item}</span>;
        })}
      </motion.h2>
    </motion.div>
  );
};

export default AnimatedHeading;
