"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fadeInUp } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeader 
          title="About Me" 
          description="A brief introduction to my journey and passion"
          className="mb-12"
        />
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-8 items-start"
        >
          <Avatar className="h-32 w-32 shrink-0">
            <AvatarImage src="/images/headshot.jpg" alt="Mark Zuckerberg" />
            <AvatarFallback className="text-2xl">MZ</AvatarFallback>
          </Avatar>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              I founded Facebook in 2004 with the mission to give people the power to build 
              community and bring the world closer together. Over the years, we&apos;ve grown from a 
              college project into one of the world&apos;s most influential technology companies.
            </p>
            <p className="text-lg leading-relaxed">
              Today, as the founder and CEO of Meta, I&apos;m focused on building the next generation 
              of computing platforms, including virtual and augmented reality, to help people 
              connect in more meaningful ways. We&apos;re working on making the metaverse a reality 
              where people can work, play, and socialize in entirely new ways.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond technology, I&apos;m passionate about philanthropy and education. Through the 
              Chan Zuckerberg Initiative, my wife Priscilla and I are working to advance human 
              potential and promote equality in areas like education, healthcare, and scientific research.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
