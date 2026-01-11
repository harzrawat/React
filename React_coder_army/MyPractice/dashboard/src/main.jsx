import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useEffect, useState } from 'react'

function Clock(){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        const id = setInterval(()=>{
            setCount(count=>count<2 ? count+1: count%2)
        }, 1000)

        return ()=>{
            clearInterval(id);
        }
    },[])

    return(
    <>
        <h2>This is actual no delay clock</h2>
        <h1>{count}</h1>
    </>
    )
}

createRoot(document.getElementById('root')).render(
    <>
    <Clock/>
    <App />
    </>
)
