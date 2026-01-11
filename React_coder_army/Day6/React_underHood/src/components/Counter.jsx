import { useState } from "react"

function Counter({name}){

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }
    return(
        <div style={{backgroundColor:"wheat", padding:"15px", borderRadius:"10px"}}>
            <h1>This is {name} Card</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
    
}
export default Counter