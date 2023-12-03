
export default function Board ({task, index, taskList, setTaskList}){

    const handleDelete = ()=>{
        let removeIndex =taskList.indexOf(task);
        taskList.splice(removeIndex,1);
        setTaskList((current=>current.filter(todo=>index ===removeIndex)))
    }

    return (
        <div>
            <p>{task}</p>
            <button onClick ={handleDelete}>Delete</button>
        </div>
        
    )
}