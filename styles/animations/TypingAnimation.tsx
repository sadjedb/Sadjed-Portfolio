import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  fullText: string;
}

const TypingAnimation = ({ fullText }: TypingAnimationProps) => {
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  console.log(text);
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        console.log(index);
        console.log(fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 165);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  useEffect(() => {
    if (isTypingComplete) {
      setCursorVisible(true);
      return;
    }

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 400);

    return () => clearInterval(cursorInterval);
  }, [isTypingComplete]);

  return (
    <div
      style={{ display: "flex", alignItems: "center", fontFamily: "monospace" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 min-h-[80px]"
      >
        {text}
      </motion.div>
      {/* <motion.div
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ marginLeft: 4 }}
        className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 min-h-[80px] text-blue-600"
      >
        |
      </motion.div> */}
    </div>
  );
};

export default TypingAnimation;
