import { motion } from "motion/react";
import {
  Brain,
  Code2,
  Database,
  GitBranch,
  Cpu,
  Globe,
} from "lucide-react";
import "./skills.css";

function Skills() {
  const skills = [
    { name: "Python", icon: Code2 },
    { name: "Machine Learning", icon: Brain },
    { name: "Artificial Intelligence", icon: Cpu },
    { name: "Computer Vision", icon: Globe },
    { name: "SQL & Databases", icon: Database },
    { name: "Git & GitHub", icon: GitBranch },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-grid"></div>

      <motion.div
        className="skills-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="skills-label">TECH STACK</p>

        <h2>
          Tools I use to
          <span> build.</span>
        </h2>

        <p className="skills-intro">
          A growing toolkit focused on artificial intelligence,
          machine learning, software development, and intelligent systems.
        </p>

        <div className="skills-list">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                className="skill-item"
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{ y: -5 }}
              >
                <Icon size={25} />
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;