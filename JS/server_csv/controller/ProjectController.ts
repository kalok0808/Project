import { Request, Response } from "express";
import { ProjectService } from "../service/ProjectService";

export class ProjectController {
  constructor(private projectService: ProjectService) {}

  getAllProjects = (req: Request, res: Response) => {
    try {
      const project = this.projectService.getAllProjects();

      res.json(project);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: "internal server error" });
    }
  };

  addNewProject = (req: Request, res: Response) => {
    try {
      const { name, description, assignedTo, date } = req.body;
      this.projectService.addNewProject(name, description, assignedTo, date);
      res.json({ message: "success" });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: "internal server error" });
    }
  };

  updateProject = (req: Request, res: Response) => {
    try {
      const { name, description, assignedTo, date } = req.body;
      const id = req.params.id;
      this.projectService.updateProject(
        id,
        name,
        description,
        assignedTo,
        date
      );
      res.json({ message: "success" });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: "internal server error" });
    }
  };
}
