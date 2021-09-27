import express from 'express'
import bodyParser from 'body-parser'
import { createRoute } from './routes/routes'
import { Controller } from './controller/controller'
import { Service } from './service/service';
import { UserService } from './service/UserService';
import { UserController } from './controller/UserController';
import { createUserRoute } from './routes/userRoutes';
import { ProjectService } from './service/ProjectService';
import { ProjectController } from './controller/ProjectController';
import { createProjectRoute } from './routes/projectRoutes';
import cors from 'cors'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))


const service = new Service();
const controller = new Controller(service);
const routes = createRoute(controller);

const userService = new UserService();
const userController = new UserController(userService)
const userRoutes = createUserRoute(userController)

const projectService = new ProjectService()
const projectController = new ProjectController(projectService)
const projectRoutes = createProjectRoute(projectController)

app.use('/', express.static('./public'));
app.use(routes);
app.use('/user', userRoutes)
app.use('/project', projectRoutes)

const PORT = 8080
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    console.log(`Please visit: http://localhost:${PORT}`)
})