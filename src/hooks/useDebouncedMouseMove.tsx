import { useCallback, useEffect } from 'react'

export const useDebouncedMouseMove = (animationRef: React.RefObject<HTMLDivElement>, delay: number) => {
  const updateMousePosition = useCallback(
    (ev: MouseEvent) => {
      if (!animationRef.current) return
      const { clientX, clientY } = ev
      const rect = animationRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top
      animationRef.current.style.setProperty('--x', `${x}px`)
      animationRef.current.style.setProperty('--y', `${y}px`)
    },
    [animationRef]
  )
  const debounce = useCallback(<Args extends any[]>(func: (...args: Args) => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>
    return (...args: Args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
      }, delay)
    }
  }, [])
  const debouncedUpdateMousePosition = useCallback(debounce(updateMousePosition, delay), [
    debounce,
    updateMousePosition,
    delay,
  ])
  useEffect(() => {
    const handleMouseMove = debouncedUpdateMousePosition
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [debouncedUpdateMousePosition])
  return updateMousePosition
}
