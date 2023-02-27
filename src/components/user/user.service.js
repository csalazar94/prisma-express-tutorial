class UserService {
  constructor() {
    this.users = [];
  }

  addUser = (user) => {
    this.users.push(user);
    return user;
  };

  getUsers = () => this.users;

  getUser = (id) => {
    const user = this.users.find((u) => u.id === id);
    return user;
  };
}

export default UserService;
