

const ViewList=({todo})=>{

    // useEffect((event)=>{
    //     event.preventDefault()
    // },[])

    return(
        <div>
            {todo.map(item=><p>{item}</p>)}
        </div>
    )
}

export default ViewList