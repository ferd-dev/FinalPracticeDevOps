const UserService = require('../../services/UserService');

const userService = new UserService();

class UserController {
  getAllUsers(req, res) {
    const users = userService.getAllUsers();
    res.json(users);
  }

  getUserById(req, res) {
    const user = userService.getUserById(parseInt(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }

  createUser(req, res) {
    const newUser = userService.createUser(req.body);
    res.status(201).json(newUser);
  }

  updateUser(req, res) {
    const updatedUser = userService.updateUser(
      parseInt(req.params.id),
      req.body
    );
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }

  deleteUser(req, res) {
    const deletedUser = userService.deleteUser(parseInt(req.params.id));
    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }
}

module.exports = new UserController();
