import { useEffect, useState } from 'react'
import './App.css'
import Users from './Users'
import Card from './Card'
// import {users} from "./data/user.json"

function App() {
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentuser] = useState(1)

  // useEffect(()=>{
  //   fetch("./data/user.json")
  //   .then(response => response.json)
  //   .then(data => setUsers(data))
  // }, [])

  // below syntax is better way as here errors can be handled cleanly 

  useEffect(()=>{
    async function getdata(params) {
      const response = await fetch("./data/user.json")
      const data = await response.json();
      setUsers(data.users);
      console.log("getting data");
      
    }

    getdata();
  }, [])

  // below commented code will lead to multiple render as setUsers will call for rerender of the App() func 
  // and thus will keep on callinf setUsers again and again infinitely so we use useEffect to run this function only once
  //  (or based on some dependency if any, not in this case, like if URL is variable and 
  // it is changed then we can put that as dependency)

  
  // async function getdata(params) {
  //     const response = await fetch("./data/user.json")
  //     const data = await response.json();
  //     setUsers(data.users);
  //     console.log("getting data");
      
  //   }

  //   getdata();

  const statusChange = (newStatus, id)=>{
    console.log(newStatus);
    
    setUsers(users.map(user=> user.id===id ? {...user, status:newStatus}:user ));
  }

  const currentUserDetails = (users.filter(user => user.id===currentUser))[0];

  return (
    <>
        <div className='h-screen w-screen flex border-4 bg-black text-white justify-center p-5 gap-5'>
          <div className='flex-1 bg-gray-600 rounded-2xl p-5'>
              {
              users.map((user)=>{
                return (
                  <Users onclick={()=>setCurrentuser(user.id)} name={user.name} status={user.status} key={user.id}/>
                )
              })
              }
          </div>
          <div className='flex-3 bg-gray-600 rounded-2xl p-5'>
              {currentUserDetails && <Card onClick={statusChange} details={currentUserDetails} />}
          </div>
        </div>
    </>
  )
}

export default App
