import { motion } from 'framer-motion'
import { ArrowDownRight, Linkedin, MapPin, Sparkles } from 'lucide-react'
import { highlights, profile } from '../data/profile'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.div
            className="hero-kicker-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            <span className="status-pill">
              <i />
              Open to opportunities
            </span>
            <span className="hero-kicker">Notice · {profile.noticePeriod}</span>
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-name-line">S Dhigvijay</span>
          </motion.h1>

          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 }}
          >
            <Sparkles size={16} /> {profile.role}
            <span className="role-sep">/</span>
            React · Node · Python
          </motion.p>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.56 }}
          >
            <span>
              <MapPin size={16} /> {profile.location}
            </span>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.66 }}
          >
            <a className="btn btn-primary magnetic" href="#projects">
              View Work <ArrowDownRight size={18} />
            </a>
            <a className="btn btn-ghost magnetic" href={`mailto:${profile.email}`}>
              Contact
            </a>
            <a
              className="btn btn-ghost magnetic"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.aside
          className="hero-panel magnetic"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.32, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-panel-glow" />
          <div className="hero-panel-top">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="panel-label">live.profile.ts</span>
          </div>
          <pre className="hero-code">
            <code>
              <span className="c-key">const</span> engineer = {'{'}
              {'\n'}
              {'  '}name: <span className="c-str">"{profile.shortName}"</span>,
              {'\n'}
              {'  '}focus: <span className="c-str">"Full Stack"</span>,
              {'\n'}
              {'  '}stack: [<span className="c-str">"React"</span>, <span className="c-str">"Node"</span>,{' '}
              <span className="c-str">"Python"</span>],
              {'\n'}
              {'  '}strengths: [
              {'\n'}
              {'    '}
              <span className="c-str">"AI resume parsing"</span>,
              {'\n'}
              {'    '}
              <span className="c-str">"hybrid search"</span>,
              {'\n'}
              {'    '}
              <span className="c-str">"production devops"</span>
              {'\n'}
              {'  '}],
              {'\n'}
              {'  '}ready: <span className="c-bool">true</span>
              {'\n'}
              {'}'};
              {'\n'}
              <span className="c-comment">{'// currently shipping recruitment platforms'}</span>
            </code>
          </pre>
          <div className="hero-panel-footer">
            <span>Hyderabad</span>
            <span className="blink">● online</span>
          </div>
        </motion.aside>
      </div>

      <div className="container">
        <motion.div
          className="impact-strip"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.88 }}
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              className="impact-item"
              whileHover={{ y: -4 }}
              transition={{ delay: i * 0.02 }}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
