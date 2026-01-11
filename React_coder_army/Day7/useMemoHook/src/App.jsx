import { useState } from 'react'
import PrimeSum from './PrimeSum'


function App() {
  const [count, setCount] = useState(1)
  const [number, setNumber] = useState(0);

  function handleClick(){
    setCount(count+1)
  }

  function handleChange(e){
    setNumber(e.target.value)
  }

  return (
    <>
      <h1>Here we are showing use of useMemo in react to prevent expensive operation repeatation</h1>
      <p>Count is: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <input type="number" onChange={handleChange} />
      <PrimeSum number={number}/>
    </>
  )
}

export default App
