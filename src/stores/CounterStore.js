import { useState } from 'react'
import { createContainer } from 'unstated-next'

function useCounter (initialState = {}) {
  const { initialCount = 0, step = 1 } = initialState
  // our store state
  const [count, setCount] = useState(initialCount)
  // define our actions
  const handleDecrement = () => setCount(count - step)
  const handleIncrement = () => setTimeout(() => setCount(count + step), 200)
  // expose stuff
  return { count, handleDecrement, handleIncrement }
}

const CounterStore = createContainer(useCounter)
export default CounterStore
