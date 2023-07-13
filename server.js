const taskRoutes = require('./src/tasks/routes');
const cors = require('cors');
const express = require("express");
const TaskService = require('./src/services/task-service');

const app = express();
const PORT = process.env.PORT || 3005;
const corsOptions = {
  origin: 'https://darwin-todo.netlify.app'
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/v2/tasks", TaskService, taskRoutes);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

module.exports = app;
