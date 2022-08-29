import { useState } from "react"

const Demo3 = () => {
  let [counter, setCounter] = useState(0)
  let incrementCounter = () => {
    setCounter(counter + 1)
  }
  let decrementCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <p>{counter}</p>
      <button onClick={incrementCounter}>Add</button>
      <button onClick={decrementCounter}>Minus</button>
    </>
  )
}

export default Demo3

