import React from 'react'
import CounterStore from '../stores/CounterStore'

const Counter = React.memo(props => {
  return (
    <div className='Counter'>
      <button onClick={props.handleDecrement}>-</button>
      <span className='Counter__Count'>{props.count}</span>
      <button onClick={props.handleIncrement}>+</button>
    </div>
  )
})

Counter.Connect = (props) => {
  const counter = CounterStore.useContainer()
  return (
    <Counter {...props} {...counter} />
  )
}

export default Counter
