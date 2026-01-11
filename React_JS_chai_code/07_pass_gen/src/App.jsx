import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(false)
  const [len, setLen] = useState(6)
  const [char, setChar] = useState(false)

  const [pass, setPass] = useState("")
  const passref = useRef(null)


  // This below is conventional js function for pass generation
  // const passgen = function(len, num, char){
  //   let pass = "";   
  //   if (num && char) {
  //     for (let i = 0; i < num; i++) {
  //       const idx = Math.floor(Math.random()*alphs.length)
  //       const alph = alphs[alphidx]
  //       pass = pass+alphJvbRDxVnh
  //     }
  //   }else if (char) {
  //     for (let i = 0; i < num; i++) {
  //       const idx = Math.floor(Math.random()*(52+32))
  //       const alph = alphs.slice(0,84)[idx]
  //       pass = pass+alph
  //     }
  //   }else if (num){
  //     for (let i = 0; i < num; i++) {
  //       const idx = Math.floor(Math.random()*52)
  //       const alph = (alphs.slice(0,52)+alphs.slice(-10))[idx]
  //       pass = pass+alph
  //     }
  //   }else{
  //     for (let i = 0; i < num; i++) {
  //       const idx = Math.floor(Math.random()*(52))
  //       const alph = alphs.slice(0,52)[idx]
  //       pass = pass+alph
  //     }
  //   }
  //   return pass
  // }

  // here callback is used as crucial hook for password generator

  const passgen = useCallback(()=>{
    let alphs = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (num) alphs+="0123456789";
    if (char) alphs+="!@#$%^&*()_+[]{}|;:',.<>?/~`-=\\\"";
    let pass = ""
    for (let i = 0; i < len; i++) {
      const idx = Math.floor(Math.random()*alphs.length)
      const alph = alphs.charAt(idx)
      pass = pass+alph
    }    
    // console.log(passref.current);
    
    setPass(pass)
  },[len,num,char,setPass])   // here these are dependencies

  useEffect(()=>{
    passgen()
  },[char,len,num,passgen])

  const copypass = function(){
    passref.current.select()
    passref.current.setSelectionRange(0,len)
    window.navigator.clipboard.writeText(pass)
  }

  // to call the passgen function we can't directly call it as useCallback is used here, so either make a button to call it or use  useEffect hook 

  return (
    <>
      <h1 className='text-white'>Password Generator</h1>
      <div className='flex flex-col bg-gray-500 p-10 rounded-3xl'>
        <div className='flex'>
          <input ref={passref} className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Password" value={pass}/>
          <button className='bg-blue-600 text-white' onClick={()=>copypass()}>Copy</button>
        </div>
        <div>
          <button className='bg-gray-200 border-black border-2 border-solid'>
            <input type="range" name="Length" min={1} max={20} value={len} onChange={(e)=>{setLen((e.target.value))}}/>
            <label className='text-black' htmlFor="Length">{num} Length: {len}</label>
          </button>
          <button className='bg-red-400 border-black border-2 border-solid'>
            <input type="checkbox" defaultChecked={num} onChange={()=>{setNum((prev)=> !prev)}} />
            <label htmlFor="num">Number</label>
          </button>
          <button className='bg-yellow-300 border-black border-2 border-solid'>
            <input type="checkbox" defaultChecked={char} onChange={()=>{setChar((prev)=> !prev)}}/>
            <label className='text-black' htmlFor="char">Character</label>
          </button>
        </div>
      </div>
      
    </>
  )
}

export default App
