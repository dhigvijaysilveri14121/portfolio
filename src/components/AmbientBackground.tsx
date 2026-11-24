import { motion } from 'framer-motion'

const nodes = [
  { x: 12, y: 18 },
  { x: 28, y: 42 },
  { x: 48, y: 22 },
  { x: 68, y: 48 },
  { x: 82, y: 20 },
  { x: 18, y: 72 },
  { x: 55, y: 78 },
  { x: 88, y: 70 },
]

export function AmbientBackground() {
  return (
    <div className="bg-scene" aria-hidden>
      <div className="bg-noise" />
      <div className="bg-grid-move" />

      <motion.div
        className="bg-orb bg-orb-a"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-orb bg-orb-b"
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -25, 0], scale: [1, 0.92, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-orb bg-orb-c"
        animate={{ x: [0, 25, -35, 0], y: [0, -20, 35, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="bg-ring bg-ring-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="bg-ring bg-ring-md"
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="bg-ring bg-ring-sm"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />

      <svg className="bg-constellation" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.g
          initial={{ opacity: 0.25 }}
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <line x1="12" y1="18" x2="28" y2="42" />
          <line x1="28" y1="42" x2="48" y2="22" />
          <line x1="48" y1="22" x2="68" y2="48" />
          <line x1="68" y1="48" x2="82" y2="20" />
          <line x1="28" y1="42" x2="18" y2="72" />
          <line x1="68" y1="48" x2="55" y2="78" />
          <line x1="82" y1="20" x2="88" y2="70" />
          <line x1="18" y1="72" x2="55" y2="78" />
        </motion.g>
        {nodes.map((n, i) => (
          <motion.circle
            key={`${n.x}-${n.y}`}
            cx={n.x}
            cy={n.y}
            r="0.55"
            animate={{ r: [0.45, 0.85, 0.45], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3.2 + i * 0.35, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>

      <motion.div
        className="bg-float bg-float-1"
        animate={{ y: [0, -24, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-float bg-float-2"
        animate={{ y: [0, 18, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-float bg-float-3"
        animate={{ y: [0, -16, 0], x: [0, 12, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="bg-float bg-float-4"
        animate={{ y: [0, 22, 0], rotate: [12, 0, 12] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
