import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // const setcolor = function (color) {
  //   document.getElementById('root').style.backgroundColor = color;
  // }  

  // non need to make a func explicitly just change the value of variable color inside onclick and the same variable is defined as the backgroud color

  return (
    <>
    <div className="h-screen flex flex-col items-center justify-center bg-gray-500">
      <div className="w-[90vw] max-w-4xl h-[80vh] rounded-2xl shadow-xl" style={{ backgroundColor: color }}></div>

      <div className="mt-6 flex flex-wrap justify-center gap-4 bg-gray-200 p-4 rounded-3xl shadow-md">
        <button className="w-24 h-10 rounded-3xl border-2 border-gray-600 hover:border-dotted bg-yellow-400" onClick={() => setColor('#fde047')}> Yellow </button>
        <button className="w-24 h-10 rounded-3xl border-2 border-gray-600 hover:border-dotted bg-blue-400" onClick={() => setColor('#60a5fa')}> Blue</button>
        <button className="w-24 h-10 rounded-3xl border-2 border-gray-600 hover:border-dotted bg-red-300" onClick={() => setColor('#fca5a5')}> Red </button>
        <button className="w-24 h-10 rounded-3xl border-2 border-gray-600 hover:border-dotted bg-green-400" onClick={() => setColor('#86efac')}> Green </button>
        <button className="w-24 h-10 rounded-3xl border-2 border-gray-600 hover:border-dotted bg-black text-white" onClick={() => setColor('black')}> Black </button>
        <button className="w-24 h-10 rounded-3xl border-2 border-gray-600 hover:border-dotted bg-white text-black" onClick={() => setColor('white')}> White </button>
      </div>
    </div>

    </>
  )
}

export default App
