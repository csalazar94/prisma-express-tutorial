class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  createUser = async (req, res) => {
    try {
      const user = await this.userService.addUser(req.body);
      return res.status(201).send(user);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  getUsers = async (_, res) => {
    try {
      const users = await this.userService.getUsers();
      return res.status(200).send(users);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUser(Number(id));
      return res.status(200).send(user);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}

export default UserController;
