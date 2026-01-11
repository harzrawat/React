import React from 'react'

function Cards(props) {     // here we have used props to make cutomised changes in each card as we want only the basic card to be same and change the details in to that 
  // we ca also pass props like ==> function Cards({cardNum, text,  someObj}) 
    return (
    <>
    <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
          <div className=" bg-black sm:p-10 p-6 rounded-xl">
            <div className="">
              <h5 className="text-xl font-bold text-gray-200">{props.cardNum}</h5>
    
              <p className="mt-2 text-sm text-gray-400">
              {props.text} 
            </p>
            <p>by {props.someObj.name || "Unknown"}</p>     
            {/*  if  */}
            </div>
            
          </div>
        </div>
    </>
  )
}

export default Cards