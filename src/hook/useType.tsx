import { useState } from 'react'

function useType() {
  const [active, setActive] = useState(false)
  const [count, setCount] = useState(0)

  const calCount = (interval: NodeJS.Timeout) => {
    setCount((old) => {
      const newCount = old + 10
      if (newCount > 100) {
        clearInterval(interval)
        setActive(true)
      }
      return newCount
    })
  }

  return {
    active,
    count,
    calCount,
  }
}

export default useType
