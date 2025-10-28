"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { ProjectCard } from "@/components/shared/project-card";
import { staggerContainer } from "@/lib/animations";

const projects = [
  {
    title: "Facebook",
    description: "The world's largest social network connecting billions of people worldwide. Started in a Harvard dorm room and grew into a platform that revolutionized how people communicate.",
    tags: ["Social Network", "Platform", "Communication"],
    link: "https://facebook.com",
    image: "/images/project-facebook.jpg"
  },
  {
    title: "Meta AI",
    description: "Advanced artificial intelligence research and development. Building state-of-the-art AI models including Llama, our open-source large language model.",
    tags: ["AI", "Machine Learning", "Research"],
    link: "https://ai.meta.com",
    image: "/images/project-ai.jpg"
  },
  {
    title: "Reality Labs",
    description: "Pioneering the future of virtual and augmented reality. Developing Quest headsets, Ray-Ban Meta smart glasses, and building the metaverse.",
    tags: ["VR", "AR", "Metaverse"],
    link: "https://www.meta.com/quest",
    image: "/images/project-vr.jpg"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionHeader 
          title="Highlighted Projects" 
          description="Key initiatives and products that are shaping the future"
          className="mb-12"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
