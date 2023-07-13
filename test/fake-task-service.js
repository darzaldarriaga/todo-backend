const getTodoList = async () => {
  return [
    {
      id: 2,
      task: 'Work',
      is_done: false,
      created_at: new Date('2023-07-12T20:35:39.757Z'),
      finished_at: null,
      deleted_at: null
    }
  ];
};

const getFinishedTasks = async () => {
  return [
    {
      id: 1,
      task: 'School',
      is_done: true,
      created_at: new Date('2023-07-12T20:29:37.746Z'),
      finished_at: new Date('2023-07-12T20:35:41.225Z'),
      deleted_at: null
    }
  ];
};

const addTask = async (task) => {
  return [
    {
      id: 2,
      task,
      is_done: false,
      created_at: new Date('2023-07-12T20:35:39.757Z'),
      finished_at: null,
      deleted_at: null
    }
  ];
};

const updateTask = async (id, is_done) => {
  return [
    {
      id,
      task: 'New Task',
      is_done,
      created_at: new Date('2023-07-12T20:35:39.757Z'),
      finished_at: is_done ? new Date('2023-07-12T20:35:41.225Z') : null,
      deleted_at: null
    }
  ];
}

const deleteAllTasks = async () => {
  return [];
};

const searchTasks = async (term, is_done) => {
  is_done = is_done === 'true';
  return [
    {
      id: 2,
      task: term,
      is_done,
      created_at: new Date('2023-07-12T20:35:39.757Z'),
      finished_at: is_done ? new Date('2023-07-12T20:35:41.225Z') : null,
      deleted_at: null
    }
  ];
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

const FakeTaskService = (req, res, next) => {
  req.service = Service();
  next();
}

module.exports = FakeTaskService