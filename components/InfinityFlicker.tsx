"use client";
import { motion } from "framer-motion";

const InfinityFlicker = ({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 8, delay: delay ? delay : 0, repeat: Infinity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default InfinityFlicker;
