import { useState } from 'react'

export default function Input ({taskList, setTaskList}){

    const [input, setInput]=useState("")

    const handleAddTask =(e)=>{
        e.preventDefault();
        setTaskList ([...taskList, input]);
        setInput("");

    }
    return (
        <div>
            <form>
                <input className=" mt-2 font-thin sm:font-bold placeholder-black placeholder:italic  border-2 rounded-md border-black"
                    type="text"
                    placeholder=" Add new Task"
                    value ={input}
                    onChange={(e)=>setInput(e.target.value)}
                >
                </input>
                <button className='mx-2 border-2 rounded-md border-black px-1 bg-blue-200  ' onClick={handleAddTask}>Add</button>
                
            </form>
        </div>
    )
}