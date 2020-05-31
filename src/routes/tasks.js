import { Router } from 'express';
import * as TaskController from '../controllers/task.controller';
const router = Router();

router.post('/create', TaskController.createTask);
router.get('/', TaskController.getAllTasks);
router.get('/:id', TaskController.getTaskById);
router.get('/project/:projectId', TaskController.getTasksByProject);
router.delete('/:id', TaskController.deleteTask);
router.put('/:id', TaskController.updateTask);

export default router;