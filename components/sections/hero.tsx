"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/social-links";
import { Download, Mail } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Hero() {
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1 
            variants={staggerItem}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            Mark Zuckerberg
          </motion.h1>
          <motion.p 
            variants={staggerItem}
            className="text-xl sm:text-2xl text-muted-foreground mb-8"
          >
            Founder of Facebook and Meta. Building the future of human connection and the metaverse.
          </motion.p>
          <motion.div 
            variants={staggerItem}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Button size="lg" onClick={handleContactClick}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/cv/mark-zuckerberg.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>
          <motion.div variants={staggerItem}>
            <SocialLinks />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
