"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <motion.div variants={staggerItem} className="relative pl-8 pb-12 border-l-2 border-border last:pb-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
      <div className="space-y-2">
        <div className="text-sm font-semibold text-primary">{year}</div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
