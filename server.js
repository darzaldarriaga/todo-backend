const taskRoutes = require('./src/tasks/routes');
const express = require("express");
const cors = require('cors');
const TaskService = require('./src/services/task-service');

const app = express();
const port = 3005;
const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/v2/tasks", TaskService, taskRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));

module.exports = app
