const pool = require('../../taskdb');
const queries = require('../tasks/queries');
const supabase = require('../dbclient/supabase-client');

const getTodoList = async () => {
  const { data } = await supabase.from('tasks')
    .select()
    .is('is_done', false)
    .is('deleted_at', null);
  return data;
};

const getFinishedTasks = async () => {
  const { data } = await supabase.from('tasks')
    .select()
    .is('is_done', true)
    .is('deleted_at', null)
    .order('finished_at', { ascending: false })
    .limit(10);
  return data;
};

const addTask = async (task) => {
  const { data, error } = await supabase.from('tasks')
    .insert({ task });
  return data;
};

const updateTask = async (id, is_done) => {
  const finished_at = is_done
    ? new Date().toISOString()
    : null;
  const { data, error } = await supabase
    .from('tasks')
    .update({ is_done: is_done, finished_at: finished_at })
    .eq('id', id)
    .select();
  return data;
}

const deleteAllTasks = async () => {
  const { data } = await supabase.from('tasks')
    .update({ deleted_at: new Date().toISOString() })
    .is('deleted_at', null);
  return data;
};

const searchTasks = async (term, is_done) => {
  const { data, error } = await supabase
    .from('tasks')
    .select()
    .ilike('task', `%${term}%`)
    .is('is_done', is_done);
  return data;
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