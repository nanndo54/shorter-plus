import { useCallback, useEffect } from 'react'

interface Props {
  targetKey?: string
  onKeyPress?: (key?: string) => void
  condition?: boolean
  ctrl?: boolean
  alt?: boolean
}

function useKeyPress({
  targetKey,
  onKeyPress,
  condition = true,
  ctrl = false,
  alt = false
}: Props) {
  onKeyPress ??= () => {}

  const handlePress = useCallback(
    ({ key, ctrlKey, altKey }: KeyboardEvent) => {
      if (ctrl && !ctrlKey) return
      if (alt && !altKey) return
      if ((targetKey === undefined && /^.$/.test(key)) || key !== targetKey)
        return
      console.log('🚀 | targetKey:', targetKey, /^.$/.test(key))

      onKeyPress(key)
    },
    [targetKey, onKeyPress, ctrl, alt]
  )

  useEffect(() => {
    if (!condition) return
    window.addEventListener('keydown', handlePress)
    return () => window.removeEventListener('keydown', handlePress)
  }, [condition, handlePress])
}

export default useKeyPress
