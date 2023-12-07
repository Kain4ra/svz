"use client";
import { Plus, Circle, MiniStick, BigStick, Triangle } from "@/components/Figures";
import { motion } from "framer-motion";
import { useRef } from "react";

export const DropFigures = () => {
  const constraintsRef = useRef(null);
  return (
    <motion.div
    ref={constraintsRef}
    className="absolute top-0 -left-40 bottom-0 right-0"
    >
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="absolute bottom-0 left-[450px] cursor-grab active:cursor-grabbing"
      >
        <Plus />
      </motion.div>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="absolute bottom-16 left-0 cursor-grab active:cursor-grabbing"
      >
        <Triangle />
      </motion.div>

      
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="absolute bottom-0 left-[800px] cursor-grab active:cursor-grabbing"
      >
        <Circle />
      </motion.div>


      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="absolute right-0 bottom-[300px] cursor-grab active:cursor-grabbing"
      >
        <BigStick />
      </motion.div>

      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="absolute right-0 bottom-[250px] cursor-grab active:cursor-grabbing"
        initial={{rotate: 20, y: 100}}
      >
        <BigStick />
      </motion.div>

      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="absolute right-0 bottom-[100px] cursor-grab active:cursor-grabbing"
        initial={{rotate: -25, y: 100}}

      >
        <BigStick />
      </motion.div>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="absolute left-[340px] top-1/2 cursor-grab active:cursor-grabbing"
      >
        <MiniStick />
      </motion.div>
    </motion.div>
  );
};
