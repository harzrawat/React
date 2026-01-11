// name fo this file is .js find out why

import { useEffect, useState } from "react"

function(){
    return []
}       // this is also a custom hook

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((response) => setData(response[currency])) 

        console.log(data);
        
    },[currency])   // here currency is dependency because whenever we are changing currency, we should get the change in data
    console.log(data);
    return data
    
} 

export default useCurrencyInfo;