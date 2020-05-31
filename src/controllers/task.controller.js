import * as TaskService from '../services/tasks.service';

export async function createTask(req, res) {
  const task = req.body;
  const response = await TaskService
    .createTask(task)
    .catch(e => res.status(400).json(e));
  res.status(201).json(response);
}

export async function getAllTasks(req, res) {
  const response = await TaskService.getAllTasks();
  res.status(200).json(response);
}

export async function getTaskById(req, res) {
  const { id } = req.params;
  const task = await TaskService
    .getTaskById(id)
    .catch(e => res.status(404).send('Not Found'));

  res.status(200).json(task);
}

export async function getTasksByProject(req, res) {
  const { projectId } = req.params;
  const tasks = await TaskService.getTasksByProject(projectId);
  res.status(200).json(tasks);
}

export async function deleteTask(req, res) {
  const { id } = req.params;
  const response = await TaskService
    .deleteTask(id)
    .catch(e => res.status(400).send('Not Found'));

  res.status(200).json(response);

}

export async function updateTask(req, res) {
  const { id } = req.params;
  const task = req.body;
  let updatedTask = await TaskService
    .updateProject(id, task)
    .catch(e => res.status(400).send('Not Found'));

  res.status(200).json(updatedTask);
}