const Card = ({details, onClick})=>{

    return(
        <div className=" ">
            <p>{details.name}</p>
            <p>{details.status}</p>
            <p>{details.id}</p>
            <button onClick={()=>{onClick(details.status==="online" ? "offline": "online", details.id )}} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
            {details.status==="online" ? "offline": "online" }
            </button>


        </div>
    )
}

export default Card