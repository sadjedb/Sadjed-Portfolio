"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/types";
import Image from "next/image";
import ProjectModal from "@/components/sections/Projects/ProjectModal";
import GoBackButton from "@/components/GoBackButton";
const page = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      slug: "e-commerce-dashboard",
      category: "E-commerce",
      description:
        "A comprehensive admin dashboard for managing online stores with analytics and inventory management.",
      fullDescription:
        "A powerful e-commerce dashboard that provides real-time analytics, inventory management, and customer insights. Built with modern technologies and best practices for optimal performance and scalability. Features include sales tracking, product management, order processing, and customer relationship management.",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20dashboard%20interface%20with%20dark%20theme%2C%20showing%20analytics%20graphs%2C%20product%20management%20panels%2C%20and%20inventory%20tracking.%20Clean%20UI%20design%20with%20blue%20accent%20colors%20and%20minimalist%20layout%2C%20professional%20looking&width=600&height=338&seq=1&orientation=landscape",
      demoLink: "https://demo.example.com/e-commerce",
      githubLink: "https://github.com/example/e-commerce",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    },
    {
      id: 2,
      title: "Travel Booking Platform",
      slug: "travel-booking",
      category: "Web App",
      description:
        "Interactive travel booking website with real-time availability, map integration, and payment processing.",
      fullDescription:
        "A comprehensive travel booking platform that allows users to search and book flights, hotels, and experiences. Features include real-time availability checking, interactive maps, secure payment processing, and personalized travel recommendations. The platform integrates with multiple travel APIs to provide the best options for users.",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20travel%20booking%20website%20interface%20showing%20destination%20search%2C%20flight%20and%20hotel%20booking%20options%2C%20with%20interactive%20map.%20Clean%20UI%20with%20vibrant%20travel%20imagery%2C%20calendar%20selection%2C%20and%20payment%20options%20in%20a%20professional%20web%20layout&width=600&height=338&seq=2&orientation=landscape",
      demoLink: "https://demo.example.com/travel",
      githubLink: "https://github.com/example/travel",
      technologies: ["Next.js", "Redux", "Mapbox", "Stripe"],
    },
    {
      id: 3,
      title: "Social Media App",
      slug: "social-media",
      category: "Mobile",
      description:
        "Mobile-first social platform with real-time messaging, content sharing, and personalized feeds.",
      fullDescription:
        "A modern social media application built with a focus on real-time interactions and user engagement. The app features instant messaging, media sharing, story creation, and AI-powered content recommendations. Built with scalability in mind, it handles millions of concurrent users and real-time updates.",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20social%20media%20application%20interface%20showing%20feed%20with%20posts%2C%20stories%2C%20messaging%20features%2C%20and%20profile%20navigation.%20Clean%20mobile-first%20design%20with%20engagement%20metrics%2C%20comment%20sections%2C%20and%20content%20sharing%20options%20in%20a%20professional%20layout&width=600&height=338&seq=3&orientation=landscape",
      demoLink: "https://demo.example.com/social",
      githubLink: "https://github.com/example/social",
      technologies: ["React Native", "Firebase", "GraphQL", "Socket.io"],
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      slug: "fitness-tracker",
      category: "Mobile",
      description:
        "Personalized workout planner with progress tracking, nutrition logging, and community challenges.",
      fullDescription:
        "A comprehensive fitness tracking application that helps users achieve their health goals. The app provides personalized workout plans, nutrition tracking, progress monitoring, and community challenges. It integrates with wearable devices and uses AI to adjust workout plans based on user progress.",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20fitness%20tracking%20application%20interface%20showing%20workout%20progress%20charts%2C%20exercise%20library%2C%20nutrition%20tracking%2C%20and%20achievement%20badges.%20Clean%20UI%20with%20health%20metrics%2C%20personalized%20workout%20plans%2C%20and%20community%20features%20in%20a%20professional%20mobile%20app%20layout&width=600&height=338&seq=4&orientation=landscape",
      demoLink: "https://demo.example.com/fitness",
      githubLink: "https://github.com/example/fitness",
      technologies: ["React", "Node.js", "MongoDB", "D3.js"],
    },
    {
      id: 5,
      title: "Learning Management System",
      slug: "lms-platform",
      category: "Web App",
      description:
        "Educational platform with course creation tools, student progress tracking, and interactive assessments.",
      fullDescription:
        "A comprehensive learning management system designed for educational institutions and corporate training. Features include course creation tools, progress tracking, interactive assessments, and real-time collaboration. The platform supports various content types and includes analytics for tracking student performance.",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20learning%20management%20system%20interface%20showing%20course%20catalog%2C%20student%20dashboard%2C%20progress%20tracking%2C%20and%20assessment%20tools.%20Clean%20educational%20UI%20with%20content%20modules%2C%20video%20lectures%2C%20and%20interactive%20quizzes%20in%20a%20professional%20web%20layout&width=600&height=338&seq=5&orientation=landscape",
      demoLink: "https://demo.example.com/lms",
      githubLink: "https://github.com/example/lms",
      technologies: ["Vue.js", "Express", "PostgreSQL", "WebRTC"],
    },
    {
      id: 6,
      title: "Smart Home Control Panel",
      slug: "smart-home",
      category: "UI/UX",
      description:
        "IoT dashboard for controlling connected home devices with automation rules and energy monitoring.",
      fullDescription:
        "An intuitive smart home control panel that brings all your connected devices together. The dashboard provides real-time device status, automation rules, energy monitoring, and scene management. Built with security in mind, it includes end-to-end encryption and multi-factor authentication.",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20smart%20home%20control%20panel%20interface%20showing%20device%20management%2C%20automation%20rules%2C%20energy%20monitoring%2C%20and%20scene%20settings.%20Clean%20UI%20with%20connected%20device%20status%2C%20temperature%20controls%2C%20and%20security%20cameras%20in%20a%20professional%20dashboard%20layout&width=600&height=338&seq=6&orientation=landscape",
      demoLink: "https://demo.example.com/smart-home",
      githubLink: "https://github.com/example/smart-home",
      technologies: ["React", "MQTT", "Node.js", "Three.js"],
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <div className={`py-12 `}>
      <GoBackButton />
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isModalOpen
            ? "overflow-hidden opacity-45 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            : ""
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a curated collection of my projects, highlighting expertise
            in frontend development, UI/UX design, user-focused solutions. Each
            project demonstrates my commitment to quality, creativity, and
            continuous learning as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="h-full flex flex-col"
              onClick={() => openModal(project)}
            >
              <CardHeader className="p-0">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <Image
                    width={1000}
                    height={500}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <div className="px-4  flex-1 flex flex-col">
                <div className="mb-2">
                  <span className="text-sm text-blue-600 font-medium">
                    {project.category}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>

                <CardContent className="p-0 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </div>
              <CardFooter className="flex justify-between px-6 pt-0 pb-4">
                <Button variant="SecondaryButton" asChild>
                  <a href={project.demoLink} target="_blank">
                    Live Demo
                  </a>
                </Button>
                <Button variant="mainButton" asChild>
                  <a href={project.githubLink} target="_blank">
                    View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={closeModal}
      />
    </div>
  );
};

export default page;
