const pool = require('../../taskdb');
const queries = require('./queries');

const getTodoList = async (req, res) => {
  try {
    const results = await req.service.getTodoList();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send({ message: 'Server error' });
  }
};

const getFinishedTasks = async (req, res) => {
  try {
    const results = await req.service.getFinishedTasks();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send({ message: 'Server error' });
  }
};

const addTask = async (req, res) => {
  try {
    const { task } = req.body;
    if (!task || task === '') {
      return res.status(400).send({ message: 'Task should not be empty' });
    }

    const results = await req.service.addTask(task);
    res.status(201).json(results);
  } catch (err) {
    res.status(400).send({ message: 'Task should not be empty' });
  }
};

const updateTask = async (req, res) => {
  try {
    const  id = parseInt(req.params.id);
    const { is_done } = req.body;

    const results = await req.service.updateTask(id, is_done);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send({ message: 'Server error' });
  }
}

const deleteAllTasks = async (req, res) => {
  try {
    const results = await req.service.deleteAllTasks();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).send({ message: 'Server error' });
  }
};

const searchTasks = async (req, res) => {
  try {
    const { term, is_done } = req.params;
    const results = await req.service.searchTasks(term, is_done);

    res.status(200).json(results);
  } catch (err) {
    res.status(500).send({ message: 'Server error' });
  }
};

module.exports = {
  getTodoList,
  getFinishedTasks,
  addTask,
  updateTask,
  deleteAllTasks,
  searchTasks,
};