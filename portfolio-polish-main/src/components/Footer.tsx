import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/mayanksoni1101",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mayank-soni-705077377/",
      label: "LinkedIn",
    },
    { icon: Youtube, href: "https://youtube.com/", label: "YouTube" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#home"
            className="text-2xl font-display font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Mayank<span className="gradient-text">.Soni</span>
          </motion.a>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" />{" "}
            by <span className="gradient-text">Mayank Soni</span> & for{" "}
            <span className="gradient-text">Mayank Soni</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
