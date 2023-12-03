
export default function Board ({task, index, taskList, setTaskList}){

    const handleDelete = ()=>{
        let removeIndex =taskList.indexOf(task);
        taskList.splice(removeIndex,1);
        setTaskList((current=>current.filter(todo=>index ===removeIndex)))
    }

    return (
        <div className="max-w-sm flex items-center justify-start flex-col rounded-md bg-teal-400 hover:bg-teal-300 hover:border-green-500 hover:border-2 hover:scale-125 hover:shadow-2xl hover:ease-in duration-300 ">
            <p >{task}</p>
            <button onClick ={handleDelete} className="my-4 mx-2 rounded-md hover:text-yellow-200 hover:bg-red-500 hover:border-yellow-200 hover:border-2 p-1 border-2 border-red-600 bg-red-100">Delete</button>
        </div>
        
    )
}