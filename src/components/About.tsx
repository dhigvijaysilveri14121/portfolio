import { motion } from 'framer-motion'
import { education, profile } from '../data/profile'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="section-title">Engineer who ships the whole product loop</h2>
          <p className="section-lead">{profile.summary}</p>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.1}>
            <div className="about-card surface">
              <h3>What I own</h3>
              <ul className="about-list">
                <li>Responsive React / Next.js interfaces with Redux-driven state</li>
                <li>REST APIs, auth flows, and multi-database data layers</li>
                <li>Solr + Qdrant hybrid search and local LLM resume pipelines</li>
                <li>Docker, Nginx, PM2, and Linux production operations</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="about-card surface about-edu">
              <h3>Education</h3>
              <p className="edu-degree">{education.degree}</p>
              <p className="edu-field">{education.field}</p>
              <p className="edu-school">{education.school}</p>
              <div className="edu-meta">
                <span>Graduated {education.year}</span>
                <span>CGPA {education.cgpa}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <motion.div className="about-card surface about-roles" whileHover={{ y: -4 }}>
              <h3>Open to</h3>
              <div className="role-wrap">
                {profile.preferredRoles.map((role) => (
                  <span key={role} className="chip">
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
