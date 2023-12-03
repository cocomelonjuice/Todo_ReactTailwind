import { useState } from 'react'
import './App.css'
import Input from "./Input.jsx"
import Board from "./Board.jsx"

function App() {
  const [taskList, setTaskList]=useState([]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline ">My todo list</h1>

      <Input taskList ={taskList} setTaskList ={setTaskList} />

      <div className="max-w-xl flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12 mt-4">
        {taskList.map((task, index)=>

        <Board key={index} task ={task} index={index} taskList={taskList} setTaskList={setTaskList} />
      
        )}
      </div>
    </div>
  )
}

export default App
