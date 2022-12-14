import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'


function App() {
  const [count, setCount] = useState(0)

  function decrementCount()
  {
    setCount(prevCount => prevCount-1);
  }
  function incrementCount()
  {
    setCount(prevCount => prevCount+1);
  }
  return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App
