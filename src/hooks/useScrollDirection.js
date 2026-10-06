import { useEffect, useState } from 'react'

function useScrollDirection({ threshold = 50, tolerance = 10 } = {}) {
  const [scrollState, setScrollState] = useState({
    direction: 'up',
    headerState: 'expanded',
    isPastThreshold: false,
  })

  useEffect(() => {
    let previousY = window.scrollY
    let frameId = null
    let mergeTimerId = null

    const clearMergeTimer = () => {
      if (mergeTimerId !== null) {
        window.clearTimeout(mergeTimerId)
        mergeTimerId = null
      }
    }

    const updateScrollState = () => {
      const currentY = window.scrollY
      const difference = currentY - previousY
      const isPastThreshold = currentY > threshold

      if (Math.abs(difference) >= tolerance || !isPastThreshold) {
        const direction = difference > 0 && isPastThreshold ? 'down' : 'up'

        if (direction === 'down') {
          setScrollState({ direction, headerState: 'merging', isPastThreshold })
          clearMergeTimer()
          mergeTimerId = window.setTimeout(() => {
            setScrollState({ direction: 'down', headerState: 'compact', isPastThreshold: true })
            mergeTimerId = null
          }, 500)
        } else {
          clearMergeTimer()
          setScrollState({ direction, headerState: 'expanded', isPastThreshold })
        }

        previousY = currentY
      }

      frameId = null
    }

    const handleScroll = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateScrollState)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateScrollState()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frameId !== null) window.cancelAnimationFrame(frameId)
      clearMergeTimer()
    }
  }, [threshold, tolerance])

  return scrollState
}

export default useScrollDirection