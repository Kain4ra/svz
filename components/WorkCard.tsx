"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const WorkCard = ({
  img,
  title,
  summary,
  x,
  y,
  className,
}: {
  img: StaticImageData;
  title: string;
  summary: string;
  x: number;
  y: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={`flex flex-col items-start justify-start pb-7 ${className}`}
      initial={{ x: x, y: y, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, delay: 1 }}
    >
      <Image className="mb-16" src={img} alt={title} />
      <h3 className="mb-9 text-3xl font-semibold">{title}</h3>
      <p className="font-light text-white/75">{summary}</p>
    </motion.div>
  );
};

export default WorkCard;
