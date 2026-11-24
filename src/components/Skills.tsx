import { motion } from 'framer-motion'
import { skillGroups } from '../data/profile'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">A stack built for product + production</h2>
          <p className="section-lead">
            Frontend polish, backend reliability, search intelligence, and deployment discipline —
            the mix recruiters look for in a modern full stack hire.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06}>
              <motion.article
                className="skill-card surface"
                whileHover={{ y: -6, borderColor: 'rgba(124,255,178,0.4)' }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <h3>{group.title}</h3>
                <div className="skill-chips">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      className="chip"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * ii }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
