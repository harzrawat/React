// import New3 from "./new3"

// function App() {

//   return (
//     // below empty tags are used because only 1 element is allowed in jsx
//     <>      
//     <New3/>
//     <h1>But this text is written in App.jsx </h1>
//     </>
    
//   )
// }

// export default App 

// =============================+===============+===========================

import { useState, useEffect } from "react";
// import New3 from "./new3"

function App() {
//   const username = "Harsh Rawat"  // now how to add this username into HTML syntax which is being returned by the function
//   // use curly brace for that
//   // {username} -- this is called evaluated expression 
//   return (
//     <>      
//     <New3/>
//     <h1>But this text is written in App.jsx {username} </h1>
//     </>
    
//   )
// }

const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop if we remove if statement

    if(count<10000){
      setCount(count + 1);
    }
    
  }, [count]); // Dependency on `count`

  // return <h1>count: {count}</h1>;
  return (
        <>      
        <h1> count: {count} </h1>
        </>
        
      )
}

export default App 

