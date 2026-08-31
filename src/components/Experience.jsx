import { motion, AnimatePresence } from "motion/react";
import {
  Briefcase,
  Calendar,
  ExternalLink,
  X,
} from "lucide-react";
import { useState } from "react";
import "./Experience.css";

import internship from "../assets/internship.jpg";
import internshipIbm from "../assets/internship-ibm.jpg";

function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      image: internship,
      title: "INTERNSHIP CERTIFICATE",
      issuer: "BharatCares × IBM SkillsBuild × AICTE",
    },
    {
      image: internshipIbm,
      title: "IBM SKILLSBUILD CERTIFICATE",
      issuer: "AICTE × IBM SkillsBuild",
    },
  ];

  return (
    <>
      <section className="experience" id="experience">
        <div className="experience-grid"></div>

        <motion.div
          className="experience-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.12,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
        >
          <p className="experience-label">EXPERIENCE</p>

          <h2>
            Where I've
            <span> worked.</span>
          </h2>

          <div className="experience-card">

            {/* =========================
                LEFT SIDE — EXPERIENCE
            ========================= */}

            <div className="experience-info">

              <motion.div
                className="experience-icon"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
              >
                <Briefcase size={25} />
              </motion.div>

              <div className="experience-top">
                <div>
                  <h3>Management Intern</h3>

                  <p className="company">
                    BharatCares × IBM SkillsBuild × AICTE
                  </p>
                </div>

                <div className="experience-date">
                  <Calendar size={15} />

                  <span>
                    June 2026 — August 2026
                  </span>
                </div>
              </div>

              <p className="experience-description">
                Completed a 6-week Big Data & Business Management
                Internship conducted by BharatCares in association
                with AICTE and IBM SkillsBuild. Gained practical
                experience in data handling, documentation, computer
                operations, and professional management activities.
              </p>

              <div className="experience-tags">
                <span>Management</span>
                <span>Big Data</span>
                <span>IBM SkillsBuild</span>
                <span>AICTE</span>
              </div>
            </div>


            {/* =========================
                RIGHT SIDE — CERTIFICATES
            ========================= */}

            <div className="experience-certificates">

              {certificates.map((certificate, index) => (
                <motion.div
                  key={certificate.image}
                  className="experience-certificate"

                  initial={{
                    opacity: 0,
                    x: 100,
                  }}

                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}

                  viewport={{
                    once: false,
                    amount: 0.12,
                  }}

                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}

                  whileHover={{
                    y: -5,
                  }}

                  onClick={() =>
                    setSelectedCertificate(certificate)
                  }
                >
                  <div className="certificate-glow"></div>

                  <div className="certificate-image-wrapper">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      loading="eager"
                      decoding="async"
                    />
                  </div>

                  <div className="certificate-caption">
                    <div>
                      <span>
                        {certificate.title}
                      </span>

                      <p>
                        {certificate.issuer}
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-label="View certificate"
                      onClick={(event) => {
                        event.stopPropagation();

                        setSelectedCertificate(
                          certificate
                        );
                      }}
                    >
                      <ExternalLink size={17} />
                    </button>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>
      </section>


      {/* =========================
          CERTIFICATE FULLSCREEN
          MODAL
      ========================= */}

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="certificate-modal"

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            transition={{
              duration: 0.25,
            }}

            onClick={() =>
              setSelectedCertificate(null)
            }
          >

            <motion.div
              className="certificate-modal-content"

              initial={{
                opacity: 0,
                scale: 0.94,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                scale: 0.94,
              }}

              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}

              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                className="certificate-modal-close"
                type="button"
                aria-label="Close certificate"

                onClick={() =>
                  setSelectedCertificate(null)
                }
              >
                <X size={20} />
              </button>

              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
              />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Experience;