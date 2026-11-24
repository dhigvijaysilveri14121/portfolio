import { motion } from 'framer-motion'
import { Reveal } from './Reveal'

const steps = [
  {
    n: '01',
    title: 'Understand',
    text: 'Translate recruiter and business needs into clear product requirements and technical constraints.',
  },
  {
    n: '02',
    title: 'Architect',
    text: 'Shape UI flows, API contracts, data models, and search/AI paths before writing fragile code.',
  },
  {
    n: '03',
    title: 'Build',
    text: 'Ship polished React experiences backed by Node/Python services, databases, and integrations.',
  },
  {
    n: '04',
    title: 'Launch & Keep Alive',
    text: 'Containerize, proxy, monitor, troubleshoot, and improve in real production environments.',
  },
]

export function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <Reveal>
          <p className="section-label">Approach</p>
          <h2 className="section-title">A delivery rhythm recruiters trust</h2>
        </Reveal>

        <div className="process-rail">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <motion.article
                className="process-step"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 250, damping: 18 }}
              >
                <span className="process-n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
