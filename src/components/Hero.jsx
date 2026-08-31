import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import "./Hero.css";
import profileImage from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>

      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="hero-layout">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.p
            className="hero-label"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            AI & MACHINE LEARNING ENGINEER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            Dhruv Singh
            <span>Bhadauriya.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            Building intelligent systems at the intersection of
            <strong> AI, Machine Learning & Robotics.</strong>
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
          >
            <a href="#projects" className="primary-btn">
              Explore My Work
              <ArrowDown size={18} />
            </a>

            <a
              href="https://github.com/dhruvkshatriyaa"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.85 10.93.58.1.79-.25.79-.55v-2.15c-3.19.69-3.86-1.54-3.86-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.35.77 1.04.77 2.1v3.1c0 .3.21.66.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/dhruvsinghbhadauriya"
              target="_blank"
              rel="noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V8.99H3.54v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — PROFILE PHOTO */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, x: 80, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            delay: 0.35,
            duration: 1.1,
            ease: "easeOut"
          }}
        >
          <motion.div
            className="photo-orbit"
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <motion.div
            className="photo-card"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 1, 0, -1, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img src={profileImage} alt="Dhruv Singh Bhadauriya" />

            <div className="photo-glow"></div>
          </motion.div>
        </motion.div>

      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}

export default Hero;