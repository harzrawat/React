const Users = ({name, status, onclick})=>{
    return(
        <>
            <div onClick={onclick} className="p-5 bg-purple-600 rounded-4xl m-3 flex justify-around items-center hover:cursor-pointer hover:bg-purple-600/80">
                <h1 className="text-2xl font-bold">{name}</h1>
                <div className={`${status==="online" ? "bg-green-500" : "bg-gray-600"} rounded-full w-4 h-4 `}></div>
            </div>
        </>
    )
}

export default Users