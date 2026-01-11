import { useState } from 'react'
import Sum from './Sum'
import DependedSum from './DependedSum'

function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(count+1);
  }

  console.log("App is rendered");
  
  return (
    <>
      <h1>This is our counter</h1>
      <p>Current count is: {count}</p>
      <button onClick={increment}>Increment</button>
      <Sum/>
      <DependedSum number={count}/>
    </>
  )
}

export default App
