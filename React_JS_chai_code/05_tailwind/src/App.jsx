import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  let myobj1 = {
    name: "Harsh",
    age: 21
  }
  let myobj2 = {
    
    age: 18
  }

  return (
    <>
      <h1 className=" rounded-2xl font-black">Tailwind CSS</h1>
      <Cards cardNum = "Card1" text = "This is card 1 and it's props.text" someObj = {myobj1}/>   
      <br />
      <Cards cardNum = "Card2" text = "This is card 2 and it's props.text" someObj = {myobj2}/>   
    </>
  )
}

export default App
