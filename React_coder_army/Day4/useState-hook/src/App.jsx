import { useState } from "react"
function App() {
  const [counter, setCounter] = useState(0)

  function increment(){
    // setCounter(counter+1);
    setCounter((counter)=>counter+1);
  }

  return (
    <>
      <p>Count: {counter} </p>
      <button onClick={increment}>Increase</button>
    </>
  )
  // we are simply passing function referance here
}

export default App

// Explanation of how useState works:
// when setCounter(value) is called then the function App is re run


// this way of directly doing it using DOM ourselves is very cumbersome task from a developer perspective  


// function App(){

//   let counter = 0;
//   function increment(count){
//     counter++;
//     document.querySelector('p').textContent = `Count: ${counter}`;
//     document.querySelector('button').textContent = `Increase ${counter}`;
//     console.log(counter);
    
//   }

//   return(
//     <>
//       <p>Count: {counter} </p>
//       <button onClick={increment}>Increase {counter} </button>
//     </>
//   )
// }

// export default App