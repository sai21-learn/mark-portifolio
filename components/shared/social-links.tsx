import { Instagram, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/whysooraj",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mouli-sai-santhosh-sooraj-m-9b28b1334",
    icon: Linkedin,
  },
  {
    name: "X",
    href: "https://x.com/whysooraj",
    icon: (props: React.ComponentProps<"svg">) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/sai21-learn",
    icon: Github,
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-2">
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          variant="ghost"
          size="icon"
          asChild
        >
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <link.icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  );
}
