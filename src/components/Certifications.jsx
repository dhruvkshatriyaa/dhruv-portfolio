import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import "./Certifications.css";

import oracle from "../assets/oracle.jpg";
import ibmData from "../assets/ibm-data.jpg";
import be10x from "../assets/be10x.jpg";
import hackathon from "../assets/hackathon.jpg";

function Certifications() {
  const certifications = [
    {
      number: "01",
      title: "Oracle Data Platform 2025 Certified Foundations Associate",
      issuer: "Oracle",
      year: "2026",
      image: oracle,
    },
    {
      number: "02",
      title: "Getting Started with Data",
      issuer: "IBM SkillsBuild",
      year: "2026",
      image: ibmData,
    },
    {
      number: "03",
      title: "AI Tools & Claude Workshop",
      issuer: "be10x",
      year: "2026",
      image: be10x,
    },
    {
      number: "04",
      title: "HACK-ADHYAAY — National Level Hackathon",
      issuer: "Lovely Professional University / Unstop",
      year: "2025",
      image: hackathon,
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-grid"></div>

      <motion.div
        className="certifications-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="certifications-label">CERTIFICATIONS</p>

        <h2>
          Credentials that
          <span> keep me moving.</span>
        </h2>

        <p className="certifications-intro">
          A collection of certifications, learning experiences, and
          achievements gathered throughout my academic and technical journey.
        </p>

        <div className="certifications-list">
          {certifications.map((certificate, index) => (
            <motion.article
              className="certificate"
              key={certificate.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
            >
              <div className="certificate-number">
                {certificate.number}
              </div>

              <div className="certificate-icon">
                <Award size={22} />
              </div>

              <div className="certificate-info">
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
              </div>

              <span className="certificate-year">
                {certificate.year}
              </span>

              <button className="certificate-link" type="button">
                <ExternalLink size={18} />
              </button>

              {/* Certificate Preview */}
              <div className="certificate-preview">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Certifications;