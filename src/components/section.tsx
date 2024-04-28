import clsx from "clsx";
import { motion } from "framer-motion";

const Section = ({ title, className }: { title: string; className?: string }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 23 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={clsx("text-4xl mb-8 font-semibold dark:text-white text-gray-900", className)}
    >
      {title}
    </motion.h1>
  );
};

export default Section;
