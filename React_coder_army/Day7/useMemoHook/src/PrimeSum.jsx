import { useEffect, useMemo, useState } from "react";

function PrimeSum({number}){

    // function findSum(number){
    //     function isprime(number){
    //         for(let i=2; i<number; i++){
    //             if(number%i==0){
    //                 return false;
    //             }
    //         }
    //         return true;
    //     }

    //     let res=0;
    //     for (let i = 2; i <=number; i++) {
    //         if(isprime(i)){
    //             res+=i;
    //         }
    //     }
    //     console.log("calculating result");
        
    //     return res;
    // }
    // const total = findSum(number);



    const total = useMemo((number)=>{
        function findSum(n){
            function isprime(n){
                for(let i=2; i<n; i++){
                    if(n%i==0){
                        return false;
                    }
                }
                return true;
            }

            let res=0;
            for (let i = 2; i <=n; i++) {
                if(isprime(i)){
                    res+=i;
                }
            }
            console.log("calculating result");
            return res;            
        }
        return findSum(number)
        
    }, [number])
    console.log(total);
    



    // const [total, setTotal] = useState(0);
    // useEffect(()=>{
    //     function findSum(n){
    //         function isprime(n){
    //             for(let i=2; i<n; i++){
    //                 if(n%i==0){
    //                     return false;
    //                 }
    //             }
    //             return true;
    //         }

    //         let res=0;
    //         for (let i = 2; i <=n; i++) {
    //             if(isprime(i)){
    //                 res+=i;
    //                 console.log("prime is:", i);
                    
    //             }
    //         }
    //         console.log("calculating result");
    //         return res;            
    //     }
    //     const result = findSum(number)
    //     setTotal(result);
    //     console.log(result);
        
    // }, [number])



    return(
        <>
            <h1>This is sum of prime in first {number} natural numbers</h1>
            <p>Sum: {total}</p>
        </>
    )
}

export default PrimeSum