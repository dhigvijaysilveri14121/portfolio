import { motion } from 'framer-motion'
import { experience } from '../data/profile'
import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Shipping recruitment products in production</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="exp-card surface">
            <div className="exp-head">
              <div>
                <h3>{experience.title}</h3>
                <p className="exp-company">{experience.company}</p>
              </div>
              <div className="exp-meta">
                <span>{experience.period}</span>
                <span>{experience.location}</span>
              </div>
            </div>
            <p className="exp-overview">{experience.overview}</p>

            <div className="exp-buckets">
              {experience.buckets.map((bucket, i) => (
                <motion.div
                  key={bucket.title}
                  className="exp-bucket"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <h4>{bucket.title}</h4>
                  <ul>
                    {bucket.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
