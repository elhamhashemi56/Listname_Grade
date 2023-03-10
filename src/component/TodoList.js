import { isDisabled } from "@testing-library/user-event/dist/utils"
import { useState } from "react"
import "./todoList.css"
const TodoList=({todo,setTodo})=>{

    const [fullname,setFullname]=useState("")
    const [grade,setgrade]=useState(1)
    const [subject,setSubject]=useState("")

    function handleSubmit(event) {
        event.preventDefault();
        // Hier können Sie Ihre Submit-Logik implementieren
      }


    const handleChangeSelect=(event)=>{
        setSubject(event.target.value)
    }

    const handleClick=()=>{
       
        const copy=[...todo]
        copy.push({
            fullname:fullname,
            grade:grade,
            subject:subject
        })
        setTodo(copy)
        console.log(copy);
        setFullname("")
        setSubject("Please Select your Subject")


    }

    function inc(){
        if (grade<6){
            setgrade(grade+1)
        }
        
    }

    function dec(){
        if (grade>1 && grade<=6)
         setgrade(grade-1)
    }

    return(
       
        <form className="todoList_container" onSubmit={handleSubmit}>
            <div class="mb-3">
                
                <input type="text" 
                       class="form-control" 
                       id="formGroupExampleInput" 
                       placeholder="Please Enter your Name"
                       value={fullname}
                       onChange={e=>setFullname(e.target.value)}
                       
                       />
            </div>

            <select class="form-control mb-3" aria-label="Default select example" onChange={handleChangeSelect}>
                <option selected>Please Select your Subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science (Biology, Chemistry, Physics)</option>
                <option value="Language Arts">Language Arts (English, Grammar, Writing)</option>
                <option value="Social Studies">Social Studies (History, Geography, Civics)</option>
                <option value="Foreign Languages">Foreign Languages (Spanish, French, German, etc.)</option>
                <option value="Physical Education">Physical Education (PE)</option>
                <option value="Fine Arts">Fine Arts (Art, Music)</option>
                <option value="Computer Science/Technology">Computer Science/Technology</option>
                <option value="Health Education">Health Education</option>
                <option value="Career and Technical Education">Career and Technical Education (CTE)</option>
            </select>
            
            <div class="d-flex mb-3 flex_Container">
                <div class="p-2 flex-fill">
                    <label for="disabledTextInput" class="form-label">Grade :</label>
                    {(grade===1 || grade===2) &&
                        <fieldset disabled className=" greenColor" >
                            {grade}
                        </fieldset>
                    }

                    {grade===3  &&
                        <fieldset disabled className=" yellowColor" >
                            {grade}
                        </fieldset>
                    }

                    {grade===4 &&
                        <fieldset disabled className=" orangColor" >
                            {grade}
                        </fieldset>
                    }

                    {(grade===5 || grade===6) &&
                        <fieldset disabled className=" redColor" >
                            {grade}
                        </fieldset>
                    }

                   

                </div>
                <div class="p-2 align-self-end ">
                    
                    {grade === 6 ? <button type="button" class="btn btn-secondary " disabled={isDisabled} >+Inc</button>
                                    :<button type="button" class="btn btn-danger " onClick={inc}>+Inc</button>
                    }

                    {grade === 1 ?<button type="button" class="btn btn-secondary ml-3 mr-3" disabled={isDisabled} >-Dec</button>                    
                                    :<button type="button" class="btn btn-danger ml-3 mr-3" onClick={dec}>-Dec</button>
                    }
                    
                </div>
            </div>

           
            
            <button type="submit" 
                    class="btn btn-primary"
                    onClick={handleClick}
                    >Submit</button>
        </form>
    )
    
}

export default TodoList