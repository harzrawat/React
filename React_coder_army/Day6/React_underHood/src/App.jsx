import { useState } from 'react'
import Counter from './components/Counter';

function App() {
  const [names, setNames] = useState(["A", "B", "C"]);

  function increment(){
    setNames(["D", ...names]);
  }

  function add(e){
    setNames([e.target.value, ...names]);
  }
  return(
    <>
      <div style={{display:"flex", justifyContent:"center", gap:"10px"}}>
        {
          names.map((cardname)=>{
            return (
              <Counter name={cardname} key={cardname}/>
            )
          })
        }
      </div>
      <button onClick={increment}>Add Box</button>
      <input type="text" onChange={add}/>
    </>
    // So here if we don't use key in Counter which is dynamic child, so there in first box A->D, B->A such 
    // as comparing in order both React DOM and Real DOM
  )
}

export default App
