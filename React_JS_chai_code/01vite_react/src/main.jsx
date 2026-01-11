// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// ===================================================================

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function Func1(){
//   return(
//     <h1>This is text in the func directly written in the main.jsx  </h1>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   Func1()   // this way only one function can be written, but it is not react convention 
//   // <Func1/> ... this will also work
// )

// ==========================+============================================+========================================

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//  mainly the HTML text is converted into JS code by tranpiler/compiler, so we have tried passing the object in js form directly


// const Reactelement = {
//   name:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   text:'Click me to visit google'
// }
//  It does not give the output as the name of the keys of this object are different from js convention code to convert HTML to js code

   const username = "Harsh Rawat"

const reactelement = React.createElement(
  'a',    // this is tag name
  {href:'https://google.com',target:'_blank'},    // these are internal attributes
  'click me to visit google',       // child 1     // this is to be displayed text
   username                         // child 2   // all variables are inserted at last
)

// const anotherElement = (
//   <a href='"www.google.com' target='_blank'>Click me to visit Google</a>
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  // <Reactelement/>
  reactelement
  // anotherElement    // this will work 
  // <anotherElement />      // this is wrong as it is not object but a constant
)

// bcz render() is a method of react class but we don't exactlty know how it is accessing the info of the HTML element

