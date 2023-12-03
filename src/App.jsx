import { useState } from 'react'
import './App.css'
import Input from "./Input.jsx"
import Board from "./Board.jsx"

function App() {
  const [taskList, setTaskList]=useState([]);

  return (
    <div className="flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold underline bg-red-400">RED</h1>
    <Input taskList ={taskList} setTaskList ={setTaskList} />
    <div className="mt-2">
      {taskList.map((task, index)=>

        <Board key={index} task ={task} index ={index} taskList={taskList} setTaskList={setTaskList} />
      
    )}</div>
    </div>
  )
}

export default App
