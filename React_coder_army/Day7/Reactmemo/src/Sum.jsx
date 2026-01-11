import { useState, memo} from "react";

const Sum = memo(()=>{

    const [sum, setSum] = useState(0);
    function add(){
        let res=0;
        for (let i = 1; i < 1000; i++) {
            res+=i;            
        }
        setSum(res);
    }
    console.log("Sum is rendered");
    

    return(
        <>
            <h1>This is our sum component of 1st 1000 natural numbers </h1>
            <p>SUM: {sum}</p>
            <button onClick={add}>Show some</button>
        </>
    )
})

export default Sum;