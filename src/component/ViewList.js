

const ViewList=({todo})=>{

    return(
   
             
             <table class="table table-success table-striped col-6">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {todo.map((item,index)=>{
                     
                    return<tr>
                            <th scope="row">{index+1}</th>    
                            <td>{item.fullname}</td>
                            <td>{item.subject}</td>
                            <td>{item.grade}</td>
                            
                        </tr>
                    })}
                   
                </tbody>
            </table>
       
    )
}

export default ViewList