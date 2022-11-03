import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect , useRef} from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState(["take trash", "study", "eat", "sleep"]);
    return (
        <>
            <TodoList tasks={tasks}/>
            <TodoForm
                onSubmit={(newTask) => {
                    setTasks([...tasks, newTask]);
                }}
            />
        </>
    );
}
interface TodoListProps {
    tasks: string[];
}
function TodoList(props: TodoListProps) {
    const { tasks } = props;
    const todoItems = tasks.map((task) => (
        <li key={task}>
            <TodoTask name={task}/>
        </li>
    ))
    return (
        <ul>
            {todoItems}
        </ul>
    )
}
interface TodoTaskProps {
    name: string;
}
function TodoTask(props: TodoTaskProps) {
    const {name} = props;
    const [isDone, setIsDone] = useState(false);
    function handleClick() {
        setIsDone(!isDone);
    }
    return (
        <>
            <button onClick={handleClick}>{isDone ? "uncheck" : "check"}</button>
            {isDone ? <del>{name}</del> : name}
        </>
    )
}
interface TodoFormProps {
    onSubmit: (value: string) => void;
}
function TodoForm(props: TodoFormProps) {
    const {onSubmit} = props;
    const taskInputRef = useRef(null);
    const [task, setTask] = useState("");
    return (
        <>
            <form>
                <label>
                    Task
                    <input 
                        type="text" 
                        ref={taskInputRef} 
                        value={task} 
                        onChange={() => setTask(taskInputRef.current.value)}
                    />
                </label>
            </form>
            <button onClick={() => onSubmit(task)}>Add Task</button>
        </>
    )
}

const rootNode = document.getElementById("reactDiv");
const root = ReactDOM.createRoot(rootNode)
root.render(<TodoApp/>);