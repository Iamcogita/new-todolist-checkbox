import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

const ToDoList = (task) =>{
    const [tasks, setTasks] = useState(["first task"]);

    const todoTasks = tasks.map((task) => (
        <li key={task}>
            <TodoTask name={task}/>
        </li>
    ))
    return (
        <ul>
            {todoTasks}
        </ul>
    )
}

function TodoTask(props) {
    const {name} = props;
    const [isDone, setIsDone] = useState(false);
    function setDone() {
        setIsDone(!isDone);
    }
    return(
        <>
            {isDone ? <del>{name}</del> : name}
            <button onClick={setDone}>{ isDone ? "undo" : "done" }
            </button>
        </>
    )
}

const handleSubmit = (task) => {
    task.preventDefault();
    const newTask = task.target;


    newTask.reset();
}

const ToDoForm = () => {
    const [tasks, setTasks] = useState([]);
    return(
    <>
    <form className='taskDiv' onSubmit={handleSubmit}>
        <input type='text' placeholder='your task'></input>
        <button type="submit"> add task </button>
    </form>
    <ToDoList tasks = {tasks}/>
    </>
    )
}

const App = () =>{
    const [tasks,setTasks] = useState("");
    return(
    <>
        <div>
        <h1>To Do:</h1>
            <ToDoForm/>
        </div>
    </>
    )
}


const rootNode = document.getElementById("reactDiv");
const root = ReactDOM.createRoot(rootNode)
root.render(<App/>);