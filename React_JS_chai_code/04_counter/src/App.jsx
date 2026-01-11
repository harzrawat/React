import { useState } from 'react'    // useState is a hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 0    // this will not be updated in UI

  const add = ()=>{
    if (counter<20) {
      // counter = counter+1
    // setCounter((prevcounter)=> prevcounter+1)
    // setCounter((prevcounter)=> prevcounter+1)
    // setCounter((prevcounter)=> prevcounter+1)

    // in above code actual func is running every time adding 1 every time to the counter

    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)   // writing this multiple lines will only make any difference of +1 for for the complete add function

    setCounter(counter+1)    // this will also work 
    }
    
  }

  const remove = ()=>{
    if (counter>0) {
      counter = counter-1
      setCounter(counter)
    }
    
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Counter Value: {counter}</p>
      <button onClick={()=>{add()}}>Add counter {counter}</button>
      <br/>
      <br/>
      <button onClick={remove}>Reduce counter{counter}</button>
    </>
  )
  // here I have passed "add" and "remove" function in 2 different ways, both are doing same work 
}

export default App




