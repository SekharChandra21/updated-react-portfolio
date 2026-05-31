import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            ©{currentYear} Aripaka Chandra Sekhar. Built with{" "}
            <Heart className="w-4 h-4 text-destructive fill-destructive animate-pulse" /> using React and
            Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
