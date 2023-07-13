const { Router } = require('express');
const requestHandler = require('./request-handler');

const router = Router();

router.post('/', requestHandler.addTask);
router.put('/:id', requestHandler.updateTask);
router.get('/todo', requestHandler.getTodoList);
router.get('/finished', requestHandler.getFinishedTasks);
router.get('/search/:is_done/:term', requestHandler.searchTasks);
router.delete('/', requestHandler.deleteAllTasks);

module.exports = router;