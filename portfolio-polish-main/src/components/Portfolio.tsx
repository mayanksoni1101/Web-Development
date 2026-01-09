import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/projects/project1.png";
import project2 from "@/assets/projects/project2.png";
import project3 from "@/assets/projects/project3.png";
import project4 from "@/assets/projects/project4.png";

const projects = [
  {
    id: 1,
    title: "IPL RCB Team FanPage",
    category: "FrontEnd Project",
    description:
      "I created this RCB Fanpage just for practice and to improve my creativity and take it to the next level. This project showcases a modern, responsive web application designed with a focus on usability and seamless navigation.",
    tech: ["HTML", "JavaScript", "CSS3"],
    image: project1,
    liveUrl: "https://rcb-team-fanpage.vercel.app/",
    githubUrl:
      "https://github.com/mayanksoni1101/ShadowFox/tree/56da7d822bc304e4e71261f67926dc41f00c8add/IPLTeam",
  },
  {
    id: 2,
    title: "Bill Splitter App",
    category: "React Project",
    description:
      "A React app for splitting bills with friends, keeping track of balances owed or settled. Add friends and manage shared expenses easily.",
    tech: ["React.js", "JavaScript", "CSS3"],
    image: project2,
    liveUrl: "#",
    githubUrl:
      "https://github.com/mayanksoni1101/Web-Development/tree/bfb783103573690e0ffda3bbd59003f57f129533/eat-n-split",
  },
  {
    id: 3,
    title: "Photo Gallery",
    category: "React Project",
    description:
      "A modern photo gallery web app for viewing, organizing, and reliving memories. Features album views and smooth photo browsing.",
    tech: ["React.js", "JavaScript", "CSS3"],
    image: project3,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Travel Packing List",
    category: "React Project",
    description:
      "An interactive travel packing list application. Add, manage, and track packing items with progress visualization.",
    tech: ["React.js", "JavaScript", "CSS3"],
    image: project4,
    liveUrl: "#",
    githubUrl:
      "https://github.com/mayanksoni1101/Web-Development/tree/091cb5163122b41e11c2ccbfd265d280a75ee34a/travel-list",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Latest <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group glass-card overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>

                {/* Category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
