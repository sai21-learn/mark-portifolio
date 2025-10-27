"use client";

import { motion } from "framer-motion";
import { ExternalLink, Newspaper } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { staggerItem } from "@/lib/animations";

interface PressItemProps {
  title: string;
  source: string;
  link: string;
  date: string;
}

export function PressItem({ title, source, link, date }: PressItemProps) {
  return (
    <motion.div variants={staggerItem}>
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="pt-6">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-start gap-4 group"
          >
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Newspaper className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                {title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{source}</span>
                <span>•</span>
                <span>{date}</span>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
