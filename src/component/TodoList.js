import { useState } from "react"
import "./todoList.css"
const TodoList=()=>{

    const [counter,setCounter]=useState(1)

    function inc(){
        if (counter<6){
            setCounter(counter+1)
        }
        
    }

    function dec(){
        if (counter>1 && counter<=6)
         setCounter(counter-1)
    }

    return(
       
        <form className="todoList_container">
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Full Name :</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Please Enter your Name" />
            </div>
            
            <div class="d-flex mb-3 flex_Container">
                <div class="p-2 flex-fill">
                    <label for="disabledTextInput" class="form-label">Grade :</label>
                    <fieldset disabled>
                       <input type="disabled" id="disabledTextInput" class="form-control disableInput" placeholder={counter} />
                    </fieldset>
                </div>
                <div class="p-2 align-self-end ">
                    
                    <button type="button" class="btn btn-danger" onClick={inc}>Inc</button>
                    <button type="button" class="btn btn-danger ml-3 mr-3" onClick={dec}>Dec</button>
                </div>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
    
}

export default TodoList