import { useState, useEffect, useCallback } from 'react'

export const useAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(1)

  const toggleAnimation = useCallback(() => {
    setIsPlaying(prev => !prev)
  }, [])

  const startAnimation = useCallback(() => {
    setIsPlaying(true)
  }, [])

  const stopAnimation = useCallback(() => {
    setIsPlaying(false)
  }, [])

  const changeSpeed = useCallback((speed) => {
    setAnimationSpeed(speed)
  }, [])

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space' && event.target.tagName !== 'BUTTON') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [toggleAnimation])

  return {
    isPlaying,
    animationSpeed,
    toggleAnimation,
    startAnimation,
    stopAnimation,
    changeSpeed
  }
}