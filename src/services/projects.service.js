import ProjectModel from '../models/Project';

export async function createProject(project) {
  let { name, priority, description, deliveryDate } = project;
  let fields = ['name', 'priority', 'description', 'deliveryDate'];
  let newProject = await ProjectModel
    .create({ name, priority, description, deliveryDate }, { fields })
    .catch(e => { throw e });
  return newProject;
}

export async function getAllProjects() {
  let projects = await ProjectModel.findAll();
  return projects;
}

export async function getProjectById(id) {
  let project = await ProjectModel.findOne({ where: { id } });
  if (project === null) throw new Error('Not Found');
  return project;
}

export async function deleteProject(id) {
  let response = await ProjectModel
    .destroy({ where: { id } })
    .catch(e => { throw e });
  return { message: 'Deleted Successfully!' };
}

export async function updateProject(id, project) {
  let response = await ProjectModel
    .update({ ...project }, { where: { id } })
    .catch(e => { throw e });
  return response;
}