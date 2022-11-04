import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, FC, FormEventHandler } from 'react';

const ToDoList: FC<{ taskList: string[] }> = ({ taskList }) => {
    const todoTasks = taskList.map((task) => (
        <li key={task}>
            <TodoTask name={task} />
        </li>
    ))
    return (
        <ul>
            {todoTasks}
        </ul>
    )
}

function TodoTask(props: { name: string }) {
    const { name } = props;
    const [isDone, setIsDone] = useState(false);
    function setDone() {
        setIsDone(!isDone);
    }
    return (
        <>
            {isDone ? <del>{name}</del> : name}
            <input type="checkbox" onClick={setDone}>
            </input>
        </>
    )
}

interface ToDoFormProps {
    onSubmit: FormEventHandler<HTMLFormElement>
}

const ToDoForm: FC<ToDoFormProps> = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="your task" name="taskName"></input>
            <button type="submit"> add task </button>
        </form>
    )
}

const App = () => {
    const [tasks, setTasks] = useState(["first task" , "second task" , "third task" ]);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const newTask = formData.get('taskName');
        if(newTask === ""){alert("task shouldn't be empty!")}
        else if (typeof newTask === "string") {
            setTasks([...tasks, newTask]);
        }
        form.reset();
    }

    return (
        <>
            <div className='taskDiv'>
                <h1>To Do:</h1>
                <ToDoForm onSubmit={handleSubmit} />
                <ToDoList taskList={tasks} />
            </div>
        </>
    )
};

const rootNode = document.getElementById("reactDiv")!;
const root = ReactDOM.createRoot(rootNode);

root.render(<App />);