import express from 'express';
import { ProjectController } from '../controller/ProjectController';

export function createProjectRoute (projectController: ProjectController) {

    const projectRoutes = express.Router();
    
    projectRoutes.get('/',projectController.getAllProjects)
    projectRoutes.post('/',projectController.addNewProject)
    projectRoutes.put('/:id',projectController.updateProject)

    return projectRoutes;
}