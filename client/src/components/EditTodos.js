import {useState} from 'react'

import { Button, Modal }  from 'react-bootstrap'

function EditTodos({todo}) {

    const [description, setDescription] = useState(todo.description)

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setDescription(todo.description)
    }

    const handleShow = () => {
        setShow(true);
    }

    const updateDescription = async (e) => {

        e.preventDefault()

        setShow(!show)

        try {
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    description
                })
            })

            window.location = "/"

        } catch (err) {

        }
    }

    return (
        <>
        
        <Button variant="warning" onClick={handleShow}>
            Edit Todo
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body><input className="form-control" type="text" value={description} onChange={(e) => setDescription(e.target.value)} /></Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} >
                Close
            </Button>
            <Button variant="primary" onClick={(e) => updateDescription(e)}>
                Edit
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default EditTodos
