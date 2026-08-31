import { motion } from "motion/react";
import { GraduationCap, Calendar } from "lucide-react";
import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-grid"></div>

      <motion.div
        className="education-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="education-label">EDUCATION</p>

        <h2>
          Learning to
          <span> build the future.</span>
        </h2>

        <div className="education-timeline">
          <div className="education-item">
            <div className="education-icon">
              <GraduationCap size={24} />
            </div>

            <div className="education-details">
              <div className="education-top">
                <div>
                  <h3>B.Tech — Artificial Intelligence & Machine Learning</h3>
                  <p>Lovely Professional University</p>
                </div>

                <div className="education-date">
                  <Calendar size={15} />
                  <span>2025 — 2029</span>
                </div>
              </div>

              <p className="education-description">
                Pursuing a B.Tech focused on Artificial Intelligence and
                Machine Learning, with an interest in intelligent systems,
                robotics, programming, and emerging technologies.
              </p>

              <div className="education-tags">
                <span>Artificial Intelligence</span>
                <span>Machine Learning</span>
                <span>Programming</span>
                <span>Robotics</span>
              </div>
            </div>
          </div>

          <div className="education-item secondary-education">
            <div className="education-icon">
              <GraduationCap size={24} />
            </div>

            <div className="education-details">
              <div className="education-top">
                <div>
                  <h3>B.Sc. Mathematics</h3>
                  <p>CSJMU, Kanpur</p>
                </div>
              </div>

              <p className="education-description">
                Academic background in Mathematics supporting analytical
                thinking, logical reasoning, and problem solving.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;