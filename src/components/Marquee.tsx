const rowA = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express.js',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Apache Solr',
  'Qdrant',
  'Redis',
  'Ollama',
  'Docker',
  'Nginx',
]

const rowB = [
  'Hybrid Search',
  'JWT Auth',
  'Redux Toolkit',
  'Material UI',
  'LLM Parsing',
  'Vector Embeddings',
  'PM2',
  'Linux',
  'Cloudflare',
  'REST APIs',
  'MySQL',
  'Production Ops',
]

function Track({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const loop = [...items, ...items]
  return (
    <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
      <div className="marquee-inner">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            <i />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Marquee() {
  return (
    <section className="marquee-section" aria-label="Technology stack">
      <Track items={rowA} />
      <Track items={rowB} reverse />
    </section>
  )
}
