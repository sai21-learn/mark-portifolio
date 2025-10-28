"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Lightbox } from "@/components/shared/lightbox";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useState } from "react";

const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export function Gallery() {
  const [currentImage, setCurrentImage] = useState(-1);

  const handleNext = () => {
    if (currentImage < galleryImages.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <Container>
        <SectionHeader 
          title="Gallery" 
          description="Moments and memories from various events and initiatives"
          className="mb-12"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              variants={staggerItem}
              onClick={() => setCurrentImage(index)}
              className="aspect-square overflow-hidden rounded-lg bg-muted hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label={`Open gallery image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </motion.div>

        <Lightbox
          images={galleryImages}
          currentIndex={currentImage}
          onClose={() => setCurrentImage(-1)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </Container>
    </section>
  );
}
