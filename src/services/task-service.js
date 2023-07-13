const pool = require('../../taskdb');
const queries = require('../tasks/queries');

const getTodoList = async () => {
  const res = await pool.query(queries.getTodoList);
  return res.rows;
};

const getFinishedTasks = async () => {
  const res = await pool.query(queries.getFinishedTasks);
  return res.rows;
};

const addTask = async (task) => {
  const res = await pool.query(queries.addTask, [task]);
  return res.rows;
};

const updateTask = async (id, is_done) => {
  const res = await pool.query(queries.updateTask, [id, is_done]);
  return res.rows;
}

const deleteAllTasks = async () => {
  const res = await pool.query(queries.deleteAllTasks);
  return res.rows;
};

const searchTasks = async (term, is_done) => {
  const res = await pool.query(queries.searchTasks, [ term, is_done ]);
  return res.rows;
};

const Service = () => {
  return Object.freeze({
    getTodoList,
    getFinishedTasks,
    addTask,
    updateTask,
    deleteAllTasks,
    searchTasks,
  });
}

const TaskService = (req, res, next) => {
  req.service = Service();
  next();
}

module.exports = TaskService