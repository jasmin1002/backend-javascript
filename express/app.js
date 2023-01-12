const express = require('express')
const router = require('./router/routes')
const app = express()

// app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(router);

app.listen(8000, () => {
    console.log('Server is listening on port 6000')
})
