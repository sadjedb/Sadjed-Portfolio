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

import { Button } from "../../ui/button";
import ProjectModal from "./ProjectModal";
import { Project } from "@/types/types";
import Image from "next/image";
import projects from "@/data/projects/project.json" assert { type: "json" };
import Link from "next/link";
const FeaturedProjects = () => {
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
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${
          isModalOpen
            ? "overflow-hidden opacity-45 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            : ""
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills in frontend
            development, UI/UX design, and problem-solving.
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
      <Link href="/projects">
        <Button variant="mainButton" className="flex mx-auto mt-8 px-6 py-3">
          View All Projects
        </Button>
      </Link>
    </div>
  );
};

export default FeaturedProjects;
