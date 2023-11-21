import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
      });
    
    const API = "http://localhost:4000/a5/todos";
    const [todos, setTodos] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const deleteTodo = async (todo) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }   
    };

    const updateTodo = async () => {
        try {

            const response = await axios.put(
                `${API}/${todo.id}`, todo);
              setTodos(todos.map((t) => (
                t.id === todo.id ? todo : t)));
              setTodo({});

        } catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
        
    };
    
    
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };

    const removeTodo = async (todo) => {
        const response = await axios.get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    }

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };

    const fetchTodoById = async (id) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    }

    useEffect(() => {
        fetchTodos();
    }, []);
  
    return (
        <div>
            <h3>Working with Arrays</h3>
            <input value={todo.id} readOnly /><br />
            <input
                onChange={(e) => setTodo({
                ...todo, title: e.target.value })}
                value={todo.title} type="text"
            /><br />
            <textarea
                onChange={(e) => setTodo({ ...todo,
                description: e.target.value })}
                value={todo.description} type="text"
            /><br />
            <input
                onChange={(e) => setTodo({
                ...todo, due: e.target.value })}
                value={todo.due} type="date"
            /><br />
            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}
            <label>
                <input
                onChange={(e) => setTodo({
                    ...todo, completed: e.target.checked })}
                value={todo.completed} type="checkbox"
                />
                Completed
            </label><br />
            <button 
                onClick={postTodo} 
                className="btn btn-warning me-2 w-100"
            >
                Post Todo
            </button>
            <button 
                onClick={createTodo}
                className="btn btn-primary mb-2 w-100"
            >
                Create Todo
            </button>
            <button 
                onClick={updateTodo}
                className="btn btn-primary w-100"
            >
                Update Todo
            </button>
            <button 
                onClick={updateTitle}
                className="btn btn-success mb-2 w-100"
            >
                Update Title
            </button>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li 
                        key={todo.id} 
                        className="list-group-item"
                    >
                        
                        <button 
                            onClick={() => deleteTodo(todo)} 
                            className="btn btn-danger float-end ms-2"
                        >
                            Delete
                        </button>
                        <button 
                            onClick={() => fetchTodoById(todo.id)}
                            className="btn btn-warning me-2 float-end"
                        >
                            Edit
                        </button>
                        <input 
                            checked={todo.completed}
                            type="checkbox" readOnly 
                        />

                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>
                    </li>
                ))}
            </ul>

            <h3>Updating an Item in an Array</h3>
            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary me-2" >
                Update Title to {todo.title}
            </a>

            <input
                value={todo.description}
                onChange={(e) => setTodo({
                ...todo, description: e.target.value })}
                className="form-control mb-2"
                type="text"
            />
            <h3>Edit Description</h3>
            <a
                href={`${API}/${todo.id}/title/${todo.description}`}
                className="btn btn-primary me-2" >
                Update Description to {todo.description}
            </a>
            <br />
            <input
                checked={todo.completed}
                onChange={(e) => setTodo({
                ...todo, completed: e.target.checked })}
                type="checkbox"
            />
            <h3>Edit Completed</h3>
            <a
                href={`${API}/${todo.id}/title/${todo.completed}`}
                className="btn btn-primary me-2" >
                Update Completed
            </a>


        </div>
    );
}

export default WorkingWithArrays;