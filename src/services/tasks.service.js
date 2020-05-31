import TaskModel from '../models/Task';

export async function createTask(task) {
  let { name, done, projectId } = task;
  let fields = ['name', 'done', 'projectId'];
  let newTask = await TaskModel
    .create({ name, done, projectId }, { fields })
    .catch(e => { throw e });
  return newTask;
}

export async function getAllTasks() {
  let tasks = await TaskModel.findAll();
  return tasks;
}

export async function getTaskById(id) {
  let task = await TaskModel.findOne({ where: { id } });
  if (task === null) throw new Error('Not Found');
  return task;
}

export async function getTasksByProject(projectId) {
  let tasks = await TaskModel.findAll({ where: { projectId } });
  return tasks;
}

export async function deleteTask(id) {
  let response = await TaskModel.destroy({ where: { id } })
    .catch(e => { throw e });
  return { message: 'Deleted Successfully!' };
}

export async function updateTask(id, task) {
  let response = await TaskModel
    .update({ ...task }, { where: { id } })
    .catch(e => { throw e });
  return response;
}