"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { PressItem } from "@/components/shared/press-item";
import { staggerContainer } from "@/lib/animations";

const pressItems = [
  {
    title: "Mark Zuckerberg on Meta's AI Strategy and the Future of Computing",
    source: "The Verge",
    link: "https://www.theverge.com/",
    date: "2024"
  },
  {
    title: "Inside Meta's Plan to Bring the Metaverse to Life",
    source: "Wired",
    link: "https://www.wired.com/",
    date: "2024"
  },
  {
    title: "How Meta's Open Source AI Models are Changing the Industry",
    source: "TechCrunch",
    link: "https://techcrunch.com/",
    date: "2023"
  },
  {
    title: "Zuckerberg's Vision for Virtual Reality and Beyond",
    source: "Fortune",
    link: "https://fortune.com/",
    date: "2023"
  },
  {
    title: "The Future of Social Media According to Mark Zuckerberg",
    source: "Forbes",
    link: "https://www.forbes.com/",
    date: "2023"
  },
  {
    title: "Meta's Metaverse Ambitions: A Conversation with Mark Zuckerberg",
    source: "Bloomberg",
    link: "https://www.bloomberg.com/",
    date: "2022"
  }
];

export function Media() {
  return (
    <section id="media" className="py-20">
      <Container>
        <SectionHeader 
          title="Media & Press" 
          description="Recent interviews, articles, and media appearances"
          className="mb-12"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {pressItems.map((item, index) => (
            <PressItem key={index} {...item} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
