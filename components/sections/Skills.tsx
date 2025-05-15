"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools" },
    { id: "design", label: "Design" },
  ];

  const skillsData = [
    { name: "HTML5", level: 95, category: "frontend", icon: "💻" },
    { name: "CSS3", level: 90, category: "frontend", icon: "🎨" },
    { name: "JavaScript", level: 92, category: "frontend", icon: "🔧" },
    { name: "React", level: 90, category: "frontend", icon: "⚛️" },
    { name: "Next.js", level: 85, category: "frontend", icon: "🔄" },
    { name: "TypeScript", level: 40, category: "frontend", icon: "📝" },
    { name: "Tailwind CSS", level: 85, category: "frontend", icon: "🌬️" },
    { name: "Node.js", level: 75, category: "backend", icon: "🖥️" },
    { name: "Express", level: 70, category: "backend", icon: "🚂" },
    { name: "Git", level: 60, category: "tools", icon: "🔄" },
    { name: "Figma", level: 80, category: "design", icon: "🎭" },
    { name: "Photoshop", level: 40, category: "design", icon: "🖌️" },
    { name: "UI/UX", level: 70, category: "design", icon: "👁️" },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            An overview of my technical expertise and professional capabilities
            that I ve developed throughout my journey as a developer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 shadow hover:shadow-md hover:bg-gray-50"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layout
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      className="h-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                    />
                  </div>

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
