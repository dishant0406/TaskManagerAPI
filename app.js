const express = require('express');
const taskRoutes = require('./routes/tasks');
const app = express()
const connectDB = require('./mongoConnect.js')

// Dot Env + Database
require("dotenv").config()

// Middleware
app.use(express.json())

app.use('/api/v1/tasks', taskRoutes)


// Server
const PORT = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, () => console.log(`Server is currently running on port ${PORT}...!`))
  } catch (error) {
    console.log(error)
  }
}

start()
