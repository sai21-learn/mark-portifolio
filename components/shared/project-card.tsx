"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { staggerItem } from "@/lib/animations";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export function ProjectCard({ title, description, tags, link, image }: ProjectCardProps) {
  return (
    <motion.div variants={staggerItem}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
        {image && (
          <div className="aspect-video bg-muted relative overflow-hidden">
            <Image 
              src={image} 
              alt={title}
              width={800}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {title}
            {link && (
              <Button variant="ghost" size="icon" asChild>
                <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${title}`}>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
