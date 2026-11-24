import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React + Framer Motion.
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}
