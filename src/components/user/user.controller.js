import User from './user.entities.js';

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  createUser = (req, res) => {
    const user = new User(req.body.email, req.body.password, req.body.age);
    return res.status(201).send(this.userService.addUser(user));
  };

  getUsers = (_, res) => res.status(200).send(this.userService.getUsers());

  getUser = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(this.userService.getUser(id));
  };
}

export default UserController;
