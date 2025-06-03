//Question 4
//To Do List Component
//input field, add button
//display list
//each item can delete
//can add new todos when click add or enter
//can remove todo by delete
//clear input after click add todo
//bonus: add a counter showing X items remaining

import React, { useState } from 'react';
import './todo.css';

function TodoList() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    //to add todo
    const addTodo = () => {
        const addNewTodo = input.trim();
        if (addNewTodo) {
            setTodos([...todos, addNewTodo])
            setInput('');
        }
    };

    //to delete todo
    const deleteTodo = (index) => {
        setTodos(prevTodos => {
            return prevTodos.filter((todo, i) => i !== index)
        });
    };

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div className="container">
            <div className="box-container">
                <h1>Todo List</h1>
                <div className="container-field">
                    <input
                        className="text-field"
                        type="text"
                        placeholder='Add your task'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleEnterKey}
                    />
                    <button
                        className="add-btn"
                        onClick={addTodo}
                    >ADD
                    </button>
                </div>

                {/*todo list */}
                <ul className="todo-list">
                    {todos.map((todo, index) => (
                        <li key={index} className="todo-item">
                            <span>{todo}</span>
                            <button
                                className="delete-btn"
                                onClick={() => deleteTodo(index)}
                            >Delete
                            </button>
                        </li>
                    ))}
                </ul>

                <p>{todos.length} item{todos.length !== 1 ? 's' : ''} remaining</p>
            </div>
        </div>
    )
}

export default TodoList;
