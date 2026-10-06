import { motion, useReducedMotion } from 'motion/react'

const motionElements = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
}

function TextReveal({ as = 'h2', children, className, delay = 0, ...props }) {
  const shouldReduceMotion = useReducedMotion()
  const MotionElement = motionElements[as] ?? motion.h2

  return (
    <MotionElement className={`text-reveal ${className ?? ''}`.trim()} {...props}>
      <motion.span
        className="text-reveal__content"
        initial={shouldReduceMotion ? false : { clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { delay, duration: 0.7, ease: [0.77, 0, 0.175, 1] }
        }
      >
        {children}
      </motion.span>
      {!shouldReduceMotion && (
        <motion.span
          className="text-reveal__line"
          aria-hidden="true"
          initial={{ left: '0%', opacity: 0, scaleX: 0 }}
          animate={{ left: '100%', opacity: [0, 1, 0], scaleX: [0, 1, 1] }}
          transition={{ delay, duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
        />
      )}
    </MotionElement>
  )
}

export default TextReveal