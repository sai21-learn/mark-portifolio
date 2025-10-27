import { Container } from "./container";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="border-t py-12 mt-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mark Zuckerberg. All rights reserved.
            </p>
          </div>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
