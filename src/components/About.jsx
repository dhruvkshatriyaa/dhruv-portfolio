import { motion } from "motion/react";
import { Brain, Code2, Cpu } from "lucide-react";
import "./About.css";

const cards = [
  {
    icon: Brain,
    title: "AI & ML",
    text: "Building intelligent solutions.",
  },
  {
    icon: Code2,
    title: "Development",
    text: "Creating modern applications.",
  },
  {
    icon: Cpu,
    title: "Robotics",
    text: "Exploring intelligent machines.",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid"></div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <motion.p
          className="about-label"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          ABOUT ME
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Turning ideas into
          <span> intelligent systems.</span>
        </motion.h2>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          I’m Dhruv Singh Bhadauriya, an AI & Machine Learning Engineer
          passionate about building intelligent, practical, and innovative
          solutions.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          My interests include Artificial Intelligence, Machine Learning,
          Computer Vision, Robotics, and software development. I enjoy
          transforming complex problems into simple and effective solutions.
        </motion.p>

        <div className="about-cards">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                className="about-card"
                key={card.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.55 + index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.12 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={24} />
                </motion.div>

                <h3>{card.title}</h3>

                <p>{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default About;