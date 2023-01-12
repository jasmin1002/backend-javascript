const express = require('express')
const data = require('./data')
console.log(data);
const app = express()

// app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/", (req, res) => {
    res.json(data)
})

app.post("/api/people", (req, res) => {
    console.log(req.body)
    // data = [...data, req.body]
    res.status(201).send([...data, req.body]);
})

app.listen(8000, () => {
    console.log('Server is listening on port 6000')
})
