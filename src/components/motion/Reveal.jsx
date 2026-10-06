import { motion, useReducedMotion } from 'motion/react'

const motionElements = {
  article: motion.article,
  aside: motion.aside,
  div: motion.div,
  dl: motion.dl,
  footer: motion.footer,
  li: motion.li,
  nav: motion.nav,
  section: motion.section,
  ul: motion.ul,
}

const offsets = {
  down: { x: 0, y: -30 },
  left: { x: -30, y: 0 },
  right: { x: 30, y: 0 },
  up: { x: 0, y: 30 },
}

function Reveal({
  as = 'div',
  children,
  className,
  delay = 0,
  direction = 'up',
  distance,
  duration = 0.6,
  once = true,
  viewportAmount = 0.18,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion()
  const MotionElement = motionElements[as] ?? motion.div
  const offset = { ...offsets[direction] }

  if (distance !== undefined) {
    if (offset.x) offset.x = Math.sign(offset.x) * distance
    if (offset.y) offset.y = Math.sign(offset.y) * distance
  }

  const hidden = shouldReduceMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }
  const visible = { opacity: 1, x: 0, y: 0 }

  return (
    <MotionElement
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ amount: viewportAmount, once }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { delay, duration, ease: [0.22, 1, 0.36, 1] }
      }
      {...props}
    >
      {children}
    </MotionElement>
  )
}

export default Reveal