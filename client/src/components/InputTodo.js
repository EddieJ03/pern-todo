import { useState } from 'react'

function InputTodo() {

    const [description, setDescription] = useState("")

    const onSubmitForm = async (e) => {
        // prevent page from refreshing
        e.preventDefault()

        try {

            const response = await fetch('http://localhost:5000/todos', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    description
                })
            })

            window.location.reload()

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} style={{marginRight: '5px'}} />
                <button className="btn btn-success" type="submit">Add</button>
            </form>
        </>
    )
}

export default InputTodo
