const getTodoList = "SELECT * FROM tasks WHERE is_done = false AND deleted_at IS NULL";
const getFinishedTasks = "SELECT * FROM tasks WHERE is_done AND deleted_at IS NULL ORDER BY finished_at DESC LIMIT 10";
const addTask = "INSERT INTO tasks (task) VALUES ($1) RETURNING *";
const updateTask = "UPDATE tasks SET is_done = $2, finished_at = CASE WHEN $2 THEN CURRENT_TIMESTAMP ELSE NULL END WHERE id = $1 RETURNING *";
const deleteAllTasks = "UPDATE tasks SET deleted_at = CURRENT_TIMESTAMP WHERE deleted_at IS NULL";
const searchTasks = "SELECT * FROM tasks WHERE task ILIKE '%' || $1 || '%' AND is_done = $2 AND deleted_at IS NULL" ;

module.exports = {
  getTodoList,
  getFinishedTasks,
  addTask,
  updateTask,
  deleteAllTasks,
  searchTasks,
}