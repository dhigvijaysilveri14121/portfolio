import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/profile'
import { Reveal } from './Reveal'

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Work that shows end-to-end ownership</h2>
          <p className="section-lead">
            Real platforms across recruitment, staffing, and event hiring — with measurable depth in
            UI, APIs, search, and AI.
          </p>
        </Reveal>

        <div className="projects-list">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <motion.article
                className="project-card surface"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              >
                <div className="project-index">0{index + 1}</div>
                <div className="project-body">
                  <div className="project-top">
                    <div>
                      <p className="project-type">{project.type}</p>
                      <h3>{project.name}</h3>
                    </div>
                    <span className="project-icon" aria-hidden>
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                  <p>{project.overview}</p>
                  <ul className="project-points">
                    {project.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
