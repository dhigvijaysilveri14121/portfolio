import { motion } from 'framer-motion'
import { Bot, CloudCog, Database, LayoutDashboard, Search, ShieldCheck } from 'lucide-react'
import { Reveal } from './Reveal'

const services = [
  {
    icon: LayoutDashboard,
    title: 'Product UI Systems',
    text: 'Reusable React interfaces, dashboards, filters, forms, and state-heavy workflows with Redux Toolkit.',
  },
  {
    icon: Database,
    title: 'API & Data Layers',
    text: 'Node/Express and FastAPI services with JWT auth, SQL/NoSQL modeling, and clean REST contracts.',
  },
  {
    icon: Search,
    title: 'Search Engineering',
    text: 'Apache Solr keyword search plus Qdrant semantic retrieval, merge logic, and ranking concepts like RRF.',
  },
  {
    icon: Bot,
    title: 'AI Resume Pipelines',
    text: 'Local LLM extraction with Ollama, Qwen, and Llama for structured candidate intelligence.',
  },
  {
    icon: CloudCog,
    title: 'Deploy & Runtime',
    text: 'Docker Compose, Nginx, PM2, Ubuntu servers, DNS/Cloudflare, and production incident recovery.',
  },
  {
    icon: ShieldCheck,
    title: 'End-to-End Ownership',
    text: 'From feature design to release and maintenance — one engineer covering the full delivery loop.',
  },
]

export function Services() {
  return (
    <section className="section" id="expertise">
      <div className="container">
        <Reveal>
          <p className="section-label">Expertise</p>
          <h2 className="section-title">What I bring to a hiring team</h2>
          <p className="section-lead">
            Not just tickets — complete product slices across UI, backend, search intelligence, and
            production reliability.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <motion.article
                className="service-card surface magnetic"
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <div className="service-icon">
                  <service.icon size={20} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
