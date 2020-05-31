import { Router } from 'express';
import * as ProjectsController from '../controllers/project.controller';
const router = Router();

router.post('/create', ProjectsController.createProject);
router.get('/', ProjectsController.getAllProjects);
router.get('/:id', ProjectsController.getProjectById);
router.delete('/:id', ProjectsController.deleteProject);
router.put('/:id', ProjectsController.updateProject);


export default router;