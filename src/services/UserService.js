import { User } from '../domain/models/User.js';

export class UserService {
  constructor() {
    this.users = [];
    this.currentId = 1;
    this.seedUsers();
  }

  seedUsers() {
    const initialUsers = [
      {
        name: 'John Doe',
        username: 'jdoe',
        email: 'jdoe@example.com',
        password: '123456',
        is_active: true,
      },
      {
        name: 'Jane Smith',
        username: 'jsmith',
        email: 'jsmith@example.com',
        password: 'abcdef',
        is_active: true,
      },
      {
        name: 'Alice Johnson',
        username: 'alicej',
        email: 'alicej@example.com',
        password: 'password',
        is_active: true,
      },
      {
        name: 'Bob Brown',
        username: 'bobb',
        email: 'bobb@example.com',
        password: 'qwerty',
        is_active: true,
      },
      {
        name: 'Charlie Davis',
        username: 'charlied',
        email: 'charlied@example.com',
        password: 'letmein',
        is_active: true,
      },
      {
        name: 'David Evans',
        username: 'davide',
        email: 'davide@example.com',
        password: 'pass123',
        is_active: true,
      },
      {
        name: 'Eve Williams',
        username: 'evew',
        email: 'evew@example.com',
        password: 'welcome',
        is_active: true,
      },
      {
        name: 'Frank Moore',
        username: 'frankm',
        email: 'frankm@example.com',
        password: 'securepwd',
        is_active: true,
      },
      {
        name: 'Grace Taylor',
        username: 'gracet',
        email: 'gracet@example.com',
        password: 'admin123',
        is_active: true,
      },
      {
        name: 'Hannah White',
        username: 'hannahw',
        email: 'hannahw@example.com',
        password: 'supersecret',
        is_active: true,
      },
    ];

    // Crear usuarios ficticios y agregarlos a la lista
    initialUsers.forEach((userData) => {
      this.createUser(userData);
    });
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }

  createUser(data) {
    const newUser = new User(
      this.currentId++,
      data.name,
      data.username,
      data.email,
      data.password,
      data.is_active,
      new Date()
    );
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id, data) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...data };
      return this.users[userIndex];
    }
    return null;
  }

  deleteUser(id) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      const deletedUser = this.users.splice(userIndex, 1);
      return deletedUser[0];
    }
    return null;
  }
}
