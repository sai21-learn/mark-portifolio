"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { TimelineItem } from "@/components/shared/timeline-item";
import { staggerContainer } from "@/lib/animations";

const timelineData = [
  {
    year: "1984",
    title: "Born in White Plains, New York",
    description: "Born to Karen and Edward Zuckerberg in White Plains, New York."
  },
  {
    year: "2002",
    title: "Entered Harvard University",
    description: "Began studying psychology and computer science at Harvard University."
  },
  {
    year: "2004",
    title: "Founded Facebook",
    description: "Launched Facebook from Harvard dorm room, initially for Harvard students only."
  },
  {
    year: "2006",
    title: "Opened Facebook to Everyone",
    description: "Facebook became available to anyone over 13 years old with a valid email address."
  },
  {
    year: "2012",
    title: "Facebook IPO",
    description: "Took Facebook public with one of the largest tech IPOs in history."
  },
  {
    year: "2014",
    title: "Acquired WhatsApp & Oculus",
    description: "Made strategic acquisitions of WhatsApp for $19B and Oculus VR for $2B."
  },
  {
    year: "2015",
    title: "Founded Chan Zuckerberg Initiative",
    description: "Established CZI with wife Priscilla Chan to advance human potential and equality."
  },
  {
    year: "2021",
    title: "Rebranded to Meta",
    description: "Changed company name to Meta, signaling commitment to building the metaverse."
  },
  {
    year: "2023",
    title: "Released Llama Models",
    description: "Launched Llama, open-source large language models to advance AI research."
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-muted/30">
      <Container>
        <SectionHeader 
          title="Career Timeline" 
          description="Key milestones and achievements throughout my journey"
          className="mb-12"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl"
        >
          {timelineData.map((item) => (
            <TimelineItem key={item.year} {...item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
