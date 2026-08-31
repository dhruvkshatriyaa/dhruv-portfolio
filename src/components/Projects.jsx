import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "AI Video Enhancer",
      category: "AI / MACHINE LEARNING",
      description:
        "An AI-powered video enhancement system designed to improve video quality, clarity, and visual details using intelligent image and video processing techniques.",
      tags: [
        "Python",
        "AI",
        "Machine Learning",
        "Computer Vision",
      ],
    },
    {
      number: "02",
      title: "Smart Parking System",
      category: "ROBOTICS / IOT",
      description:
        "A smart parking solution combining hardware, sensors, mobile connectivity, and automation. Users can check available slots, book parking online, locate their vehicle, and access security features.",
      tags: [
        "IoT",
        "Sensors",
        "Mobile App",
        "Automation",
      ],
    },
    {
      number: "03",
      title: "Library Management System",
      category: "SOFTWARE / DATABASE",
      description:
        "A digital library management system designed to organize books, users, records, and library operations through a structured software solution.",
      tags: [
        "React",
        "SQL",
        "DBMS",
        "JavaScript",
      ],
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        {/* =========================
            HEADING
        ========================= */}

        <motion.div
          className="projects-heading"
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <p className="section-label">
            SELECTED WORK
          </p>

          <h2>
            Projects that turn
            <span> ideas into systems.</span>
          </h2>

          <p className="projects-intro">
            A selection of projects exploring artificial
            intelligence, machine learning, robotics, IoT,
            and software development.
          </p>
        </motion.div>


        {/* =========================
            PROJECT LIST
        ========================= */}

        <div className="projects-list">

          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}

              initial={{
                opacity: 0,
                x: -70,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: false,
                amount: 0.15,
              }}

              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}

              whileHover={{
                x: 8,
              }}
            >

              {/* NUMBER */}

              <motion.div
                className="project-number"
                whileHover={{
                  scale: 1.1,
                }}
              >
                {project.number}
              </motion.div>


              {/* MAIN CONTENT */}

              <div className="project-main">

                <p className="project-category">
                  {project.category}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>


                {/* TAGS */}

                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: false,
                      }}
                      transition={{
                        delay:
                          index * 0.12 +
                          tagIndex * 0.05,
                        duration: 0.35,
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

              </div>


              {/* ARROW */}

              <motion.div
                className="project-arrow"
                whileHover={{
                  x: 5,
                  y: -5,
                  scale: 1.15,
                }}
              >
                <ArrowUpRight size={22} />
              </motion.div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;