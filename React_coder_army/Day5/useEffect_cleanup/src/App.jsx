import { useState, useEffect } from "react";
function App() {
  const [show, setShow] = useState(true);
  
  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Counter />} {/* Mounts when show=true, unmounts when show=false */}
    </>
  );
}


// here the useEffect in the below will also run when Counter will be unmounted 
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Mounted!'); // Runs once when component appears
    
    return () => {
      console.log('Unmounted!'); // Runs when component is removed
    };
  }, []);
  
  return <div>Count: {count}</div>;
}

export default App


