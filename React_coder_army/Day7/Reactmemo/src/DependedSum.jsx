import React from "react";

const DependedSum = React.memo(({number})=>{

    function add(number){
        let res=0;
        for (let i = 1; i <= number; i++) {
            res+=i;
        }
        return res;
    }

    const total = add(number)

    return(
        <>
            <h2>This is our DependedSum</h2>
            <p>Sum of first {number} natural numbers is: {total}</p>
        </>
    )
}, )

export default DependedSum