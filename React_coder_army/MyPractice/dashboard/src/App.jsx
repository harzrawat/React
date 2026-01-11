import { useDeferredValue, useState, useEffect, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const deferredCount = useDeferredValue(count)

  const calculated = useMemo(()=>{
    // this is heavy calculation deliberately just to mimic

    const n = 50000;
    let res=0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        res+=deferredCount;
      }
    }
    console.log("calculating value");
    
    return res;
  }, [deferredCount])


  useEffect(()=>{
    const id = setInterval(()=>{
      setCount(count => count+1)
    },3000) 

    return ()=>{
      clearInterval(id);
    }
  }, [])

  return (
    <>
      <h1>{count}</h1>
      <h2>Live Value</h2>
      <div>
        <h1>{calculated}</h1>
        <h2>Computed Load</h2>

      </div>
    </>
  )
}

export default App
