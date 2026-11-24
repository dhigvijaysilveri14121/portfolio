import { motion } from 'framer-motion'
import { Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-panel surface">
            <div className="contact-copy">
              <p className="section-label">Contact</p>
              <h2 className="section-title">Ready for the next product challenge</h2>
              <p className="section-lead">
                Looking for a full-stack engineer who can own UI, APIs, AI search, and production?
                Let’s talk. Based in Hyderabad · {profile.noticePeriod} notice.
              </p>
              <div className="contact-actions">
                <a className="btn btn-primary magnetic" href={`mailto:${profile.email}`}>
                  <Mail size={18} /> Email Me
                </a>
                <a
                  className="btn btn-ghost magnetic"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a className="btn btn-ghost magnetic" href={`tel:${profile.phone}`}>
                  <Phone size={18} /> Call
                </a>
              </div>
            </div>

            <div className="contact-details">
              {[
                { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
                { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: 'silveri-dhigvijay',
                  href: profile.linkedin,
                },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="contact-row magnetic"
                  target={item.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={item.label === 'LinkedIn' ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ x: 6 }}
                >
                  <item.icon size={18} />
                  <div>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
