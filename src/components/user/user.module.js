import UserController from './user.controller.js';
import UserService from './user.service.js';
import UserRouter from './user.router.js';

const userService = new UserService();
const userController = new UserController(userService);
const userRouter = new UserRouter(userController);

export default {
  service: userService,
  controller: userController,
  router: userRouter.getRouter(),
};
