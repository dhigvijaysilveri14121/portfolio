import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

type Trail = { id: number; x: number; y: number }

export function PointerEffect() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [trails, setTrails] = useState<Trail[]>([])
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.45 })
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.45 })
  const dotX = useSpring(x, { stiffness: 700, damping: 35, mass: 0.2 })
  const dotY = useSpring(y, { stiffness: 700, damping: 35, mass: 0.2 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)
    document.documentElement.classList.add('pointer-effect-active')

    let trailId = 0
    let lastTrail = 0

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const now = performance.now()
      if (now - lastTrail > 28) {
        lastTrail = now
        const id = trailId++
        setTrails((prev) => [...prev.slice(-10), { id, x: e.clientX, y: e.clientY }])
        window.setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== id))
        }, 420)
      }
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const interactive = target?.closest(
        'a, button, .chip, .project-card, .skill-card, .contact-row, .service-card, .magnetic',
      )
      setHovering(Boolean(interactive))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onOver)

    return () => {
      document.documentElement.classList.remove('pointer-effect-active')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onOver)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <div className="pointer-layer" aria-hidden>
      {trails.map((t) => (
        <span key={t.id} className="pointer-trail" style={{ left: t.x, top: t.y }} />
      ))}
      <motion.div
        className={`pointer-ring ${hovering ? 'is-hover' : ''} ${clicking ? 'is-click' : ''}`}
        style={{ translateX: ringX, translateY: ringY }}
      />
      <motion.div
        className={`pointer-dot ${hovering ? 'is-hover' : ''} ${clicking ? 'is-click' : ''}`}
        style={{ translateX: dotX, translateY: dotY }}
      />
      <motion.div className="pointer-aura" style={{ translateX: ringX, translateY: ringY }} />
    </div>
  )
}
