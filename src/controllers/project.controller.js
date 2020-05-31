import * as ProjectService from '../services/projects.service';

export async function createProject(req, res) {
  const project = req.body;
  let response = await ProjectService
    .createProject(project)
    .catch(e => res.status(400).json(e));

  res.status(201).json(response)
}

export async function getAllProjects(req, res) {
  let response = await ProjectService.getAllProjects();
  res.status(200).json(response);
}

export async function getProjectById(req, res) {
  const { id } = req.params;
  let product = await ProjectService
    .getProjectById(id)
    .catch(e => res.status(404).send('Not Found'));

  res.status(200).json(product);
}

export async function deleteProject(req, res) {
  const { id } = req.params;
  let response = await ProjectService
    .deleteProject(id)
    .catch(e => res.status(400).send('Not Found'));

  res.status(200).json(response);
}

export async function updateProject(req, res) {
  const { id } = req.params;
  const project = req.body;
  let updatedProject = await ProjectService
    .updateProject(id, project)
    .catch(e => res.status(400).send('Not Found'));

  res.status(200).json(updatedProject);
}