import TaskRouter from './tasks';
import ProjectRouter from './projects';
import { Router } from 'express';
const router = Router();

router.use('/tasks', TaskRouter);
router.use('/projects', ProjectRouter);

export default router;