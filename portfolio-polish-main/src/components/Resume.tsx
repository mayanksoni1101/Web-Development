import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, GraduationCap, Code, User } from "lucide-react";

const tabs = [
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Code },
  { id: "about", label: "About Me", icon: User },
];

const experience = [
  {
    period: "Nov 2025 - Present",
    title: "Web Development Intern",
    company: "ShadowFox",
    description: "Currently working on full-stack web development projects.",
  },
  {
    period: "Aug - Sep 2025",
    title: "Web Development Intern",
    company: "Cognify Technologies",
    description: "Successfully completed one month web development internship.",
  },
  {
    period: "2021 - 2025",
    title: "Audio & Video Editor",
    company: "JCDM College of Engineering",
    description: "Part-time audio and video editor for college programs.",
  },
  {
    period: "2022 - 2023",
    title: "Java Development Course",
    company: "Softech Infoways",
    description: "Completed Core Java Development Course with Hotel Management Project.",
  },
];

const education = [
  {
    period: "2021 - 2025",
    title: "B.Tech (Computer Science)",
    institution: "JCDM College of Engineering, Sirsa",
    description: "Graduated with 70% marks.",
  },
  {
    period: "2020 - 2021",
    title: "Class 12th (Non-Medical)",
    institution: "Shree Ram New Satluj School, Sirsa",
    description: "Scored 89% marks from HBSE Board.",
  },
  {
    period: "2018 - 2019",
    title: "Class 10th",
    institution: "Heritage International School, Kaithal",
    description: "Scored 70% marks from CBSE Board.",
  },
];

const skills = [
  { name: "Java", level: 85 },
  { name: "HTML5/CSS3", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Node.js", level: 70 },
  { name: "MongoDB", level: 65 },
  { name: "Express.js", level: 70 },
  { name: "Next.js", level: 60 },
];

const aboutInfo = [
  { label: "Name", value: "Mayank Soni" },
  { label: "Age", value: "21 Years" },
  { label: "Location", value: "Sirsa, Haryana" },
  { label: "Experience", value: "1+ Years" },
  { label: "Languages", value: "English, Hindi" },
  { label: "Freelance", value: "Available" },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="resume" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional experience, education, and skills
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground glow"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {activeTab === "experience" && (
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 relative overflow-hidden group hover:border-primary/30 transition-all"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
                  <span className="text-sm text-primary font-medium">{item.period}</span>
                  <h3 className="text-xl font-display font-semibold mt-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.company}</p>
                  <p className="text-muted-foreground mt-3">{item.description}</p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 relative overflow-hidden group hover:border-primary/30 transition-all"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
                  <span className="text-sm text-primary font-medium">{item.period}</span>
                  <h3 className="text-xl font-display font-semibold mt-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{item.institution}</p>
                  <p className="text-muted-foreground mt-3">{item.description}</p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card p-5"
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="skill-bar-fill"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "about" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card p-8"
            >
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Detail-oriented software developer with expertise in React, Java, and full-stack development. 
                Passionate about building efficient, scalable web applications and continuously enhancing 
                technical skills through learning and collaboration.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {aboutInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-muted/30 rounded-xl"
                  >
                    <span className="text-sm text-muted-foreground">{info.label}</span>
                    <p className="font-semibold mt-1">{info.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
