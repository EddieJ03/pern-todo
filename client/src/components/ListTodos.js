import { useEffect, useState } from 'react'

import EditTodo from './EditTodos'

function ListTodos() {

    const [todos, setTodos] = useState([])

    const getTodos = async () => {
        try {

            const response = await fetch('http://localhost:5000/todos')
            const data = await response.json()

            setTodos(data)
        } catch (err) {

        }
    }

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            setTodos(todos => todos.filter(todo => todo.todo_id != id))
        } catch (err) {

        }
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <>
            <table class="table table-striped mt-5">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos ? todos.map(item => <tr key={item.todo_id}><td>{item.description}</td><td><EditTodo todo={item}/></td>
                        <td><button className="btn btn-danger" onClick={() => deleteTodo(item.todo_id)}>Delete</button></td></tr>) : <h1 className="text-center">Loading . . .</h1>
                }
                </tbody>
            </table>
        </>
    )
}

export default ListTodos
