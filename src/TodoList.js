import React, { useState } from 'react';

const TodoList = () => {
    const [inputTask, setInputTask] = useState ("");

    const [List, setList] = useState([]);

    const handleDeleteTodo = (id) => {
        const newList = List.filter((todo) => 
            todo.id !== id
        );

        setList(newList);
    }

    const handleAddTodo = (todo) => {
        const newTask = {
            id: Math.random(),
            todo: todo
        };

        setList([...List, newTask]);
        setInputTask('');
    }

    const handleInputChange = (event) => {
        setInputTask(event.target.value);
    }
    return (
        <div className="Todo">
            <h1>To-Do-List-App</h1>
            <div className="Form">
        <input className="input" type="text" value={inputTask}
           onChange={handleInputChange} placeholder="Your New Task..." />
           <button className="btn" onClick={() => handleAddTodo(inputTask)}>Add Task</button>
        </div>

            <ul>
            { List.map((todo) => (
                    <li className="task" key={todo.id}>
                        {todo.todo}
                        <button onClick={() => handleDeleteTodo(todo.id)}>
                           Delete
                      </button>
                    </li>
            ))}
            </ul>
        </div>
    )
}
export default TodoList;