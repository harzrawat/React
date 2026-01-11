import { useState, useEffect } from "react"
function App() {
  const [users, setUsers] = useState([]);   // this state is for user image URL array got from API
  const [num, setNum] = useState(1)

  // async function getProfile(){
  //   const response = await fetch(`https://api.github.com/users?since=1`);
  //   const data = await response.json();
  //   setUsers(data);
  //   console.log(1);  
  // }

  // getProfile();
  // this way getProfile() will call setUsers every time and then complete function App will run everytime, 
  //  and thus getProfile will run again, so an endless loop of rerendering
  // hence we use useEffects which tell that the code inside that will run only as defined

  useEffect(()=>{

    async function getProfile(){
      const response = await fetch(`https://api.github.com/users?since=${num}`);
      const data = await response.json();
      setUsers(data);
      console.log(num);
      
    }
    getProfile();
  }, [num])

  function handleChange(e){
    setNum(e.target.value);
  }

  return (
    <>
      <input type="number" value={num} onChange={handleChange}/>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap", gap:"10px"}}>
        {
          users.map((data)=>{
            return <img src={data.avatar_url} alt="image" height={"100px"} width={"100px"}/>
          })
        }
      </div>
    </>
  )
}

export default App

