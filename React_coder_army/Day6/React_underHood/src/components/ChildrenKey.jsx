import { useState } from 'react'

function ChildrenKey() {
  const [fruits, setFruits] = useState(["Apple", "grapes", "mango"]);

  function increment(){
    setFruits(["New Guava", ...fruits]);
  }

// ========= uncomment each type to see preview ===============================================================================================================

// ===================================== First type ===============================================================================================================

  // return (
  //   <>
  //     <h1>This is my fruit list </h1>
  //     <p>Here we will compare how key is important in dynamic react children to maintain order and for efficiency</p>
  //     <ul>
  //       {
  //         fruits.map((fruit)=>{
  //           return(
  //             <li>{fruit}</li>
  //           )
  //         })
  //       }
  //     </ul>
  //     <button onClick={increment}>Add Guava</button>
  //   </>
  // )

  // Above way without key , all childeren are checked and updated as their order has changed, inefficient ReactDom update



// ===================================== Second type ===============================================================================================================

  // below we are using keys to update efficiently



  return (
    <>
      <h1>This is my fruit list </h1>
      <p>Here we will compare how key is important in dynamic react children to maintain order and for efficiency</p>
      <ul>
        {
          fruits.map((fruit)=>{
            return(
              <li key={fruit}>{fruit}</li>
            )
          })
        }
      </ul>
      <button onClick={increment}>Add Guava</button>
    </>
  )

}

export default ChildrenKey
