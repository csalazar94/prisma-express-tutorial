import { PrismaClient } from '@prisma/client';

class UserService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  addUser = async (user) => {
    const { password, ...createdUser } = await this.prisma.user.create({
      data: user,
    });
    return createdUser;
  };

  getUsers = () => this.prisma.user.findMany({
    select: {
      id: true,
      email: true,
      age: true,
    },
  });

  getUser = (id) => this.prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      age: true,
    },
  });
}

export default UserService;
