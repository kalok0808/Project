import fs from "fs";
// import { encodeComma, decodeComma } from '../enDeCode'

const projectIdPath = "project_id.txt";
const projectPath = "project.csv";

export class ProjectService {
  constructor() {}

  getAllProjects() {
    const projectArr = fs
      .readFileSync(projectPath, "utf-8")
      .split("\n")
      .map((list) => list.split(","));
    const headers = projectArr.shift();
    const projects = [];
    for (const project of projectArr) {
      const projectObj = {};
      for (const index in headers) {
        projectObj[headers[index]] = project[index];
      }
      projects.push(projectObj);
    }

    return projects;
  }

  addNewProject(
    name: string,
    description: string,
    assignedTo: string,
    date: string
  ) {
    let id = parseInt(fs.readFileSync(projectIdPath, "utf-8"));
    const newProject = `\n${id},${name},${description},${assignedTo},${date}`;
    fs.writeFileSync(projectPath, newProject, { flag: "a" });
    fs.writeFileSync(projectIdPath, ++id + "");
  }

  updateProject(
    id: string,
    name: string,
    description: string,
    assignedTo: string,
    date: string
  ) {
    const projectArr = fs
      .readFileSync(projectPath, "utf-8")
      .split("\n")
      .map((list) => list.split(","));
    const newProjectArr =projectArr.map((project) => {
      if (project[0] === id) {
        project = [id, name, description, assignedTo, date];
      }
      return project.join(',');
    });
    fs.writeFileSync(projectPath, newProjectArr.join('\n'), { flag: "w" });
  }
}
