const express = require('express')
const pool = require("./db.js")
const app = express()


// middleware
app.use(require('cors')())
app.use(express.json())

// ROUTES

// create a todo
app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body

        // RETURNING * gets back data after putting it in database
        const newTodo = await pool.query(`INSERT INTO todo (description) VALUES ($1) RETURNING *`, [description])

        // get back first item in rows, which is part of property on newTodo
        res.json(newTodo.rows[0])
    } catch (err) {
        console.log(err)
    }
})

// get all todos
app.get("/todos", async (req, res) => {
    try {

        // RETURNING * gets back data after putting it in database
        const allTodos = await pool.query(`SELECT * FROM todo`)

        // get back first item in rows, which is part of property on newTodo
        res.json(allTodos.rows)

    } catch (err) {
        console.log(err)
    }
})

// get a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params

        // RETURNING * gets back data after putting it in database
        const singleTodo = await pool.query(`SELECT * FROM todo WHERE todo_id = $1`, [id])

        // get back first item in rows, which is part of property on newTodo
        res.json(singleTodo.rows[0])

    } catch (err) {
        console.log(err)
    }
})

// update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body

        // RETURNING * gets back data after putting it in database
        const updateTodo = await pool.query(`UPDATE todo SET description = $1 WHERE todo_id = $2`, [description, id])

        // get back first item in rows, which is part of property on newTodo
        res.json("Update successful!")

    } catch (err) {
        console.log(err)
    }
})

// delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params

        // RETURNING * gets back data after putting it in database
        const singleTodo = await pool.query(`DELETE FROM todo WHERE todo_id = $1`, [id])

        // get back first item in rows, which is part of property on newTodo
        res.json("Deletion successful!")

    } catch (err) {
        console.log(err)
    }
})


app.listen(5000, () => {
    console.log("Server listening on port 5000")
})