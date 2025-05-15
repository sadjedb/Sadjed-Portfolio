"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiSend, FiFolder } from "react-icons/fi";

const GetInTouch = () => {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Interested in working together?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I m currently available for freelance projects, full-time positions,
          or consulting work. Let s create something amazing together!
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={"/contact"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
            >
              <FiSend className="text-lg" />
              Get In Touch
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1B3g6y7qsBFD89eTv9mYSt4B7uxkvm0Gu/view?usp=sharing",
                "_blank"
              );
            }}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
          >
            <FiFolder className="text-lg" />
            Download Resume
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default GetInTouch;
