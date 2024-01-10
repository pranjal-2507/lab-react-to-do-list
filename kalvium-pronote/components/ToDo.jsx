import React from "react";
import './ToDoList.css'

export default class ToDo extends React.Component{
    constructor(){
        super()
        this.state = {
            text:"",
            toDoList:[]
        }
    }


    render(){
        let {text,toDoList} = this.state

        let handleChange = (event)=>{
            this.setState({text:event.target.value})
        }
        let handleClick = ()=>{
            this.setState({toDoList:[...toDoList,text]})
        
        }
       
        let handleUpdate = (index)=>{
            let newValue = prompt("Enter the new value")
            let updatedArr = toDoList.map((el,i)=>{
                if(i==index){
                    return newValue
                }else{
                return el}
            })
            this.setState({toDoList:updatedArr})

        }
        let handleDelete =(index)=> {
            let deletedArr = toDoList.filter((el,i)=>i!==index)
            this.setState({toDoList:deletedArr})
            }

        

        return(
            <>
            <div className="addTodo">
            <input className="input" onChange={handleChange} type="text" placeholder="Please enter the task"/>
            <button onClick={handleClick}>ADD</button>
            </div>

            <div className="ShowTodo">
                {toDoList.map((el,i)=>(
                    <div key={i}>
                        <p>{el}</p>
                        <div className="btns">
                        <button onClick={()=>(handleUpdate(i))}>Update</button>
                        <button onClick={()=>(handleDelete(i))}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            </>
        )
    }
}