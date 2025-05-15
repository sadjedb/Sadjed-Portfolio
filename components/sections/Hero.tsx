"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TypingAnimation from "@/styles/animations/TypingAnimation";
import { Button } from "../ui/button";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  const text = "H i, I'm Sadjed – Frontend Developer";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 20);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillStyle = `rgba(100, 100, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      requestAnimationFrame(animateParticles);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };

    createParticles();
    animateParticles();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#F9FAFB]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <motion.div
        initial="hidden"
        animate="visible"
        style={{ display: "flex", flexWrap: "wrap" }}
        className="text-4xl font-bold text-center flex flex-col items-center justify-center z-10"
      >
        <h1 className="flex w-[80%]">
          <TypingAnimation fullText={text} />
        </h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10 font-normal transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Crafting beautiful, responsive, and user-friendly web experiences with
          modern technologies.
        </motion.p>
        <div className="flex gap-4">
          <Link href={"/projects"}>
            <Button variant="mainButton" size={"MainButtonSize"}>
              View Projects
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button variant="SecondaryButton" size={"MainButtonSize"}>
              Contact Me
            </Button>
          </Link>
        </div>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaChevronDown className="text-xl" />
      </div>
    </section>
  );
};

export default Hero;
