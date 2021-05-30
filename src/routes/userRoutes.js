const { Router } = require('express');
const routes = Router();
const fs = require('fs');
const UsersController = require('../controllers/userController');

const usersDB = JSON.parse(fs.readFileSync(`${__dirname}/../database.json`), 'utf-8');
const usersController = new UsersController(usersDB);

routes.get('/', (req, res) => {
  const users = usersController.listAllUsers();
  return res.status(200).json(users);
});

routes.get('/:id', (req, res) => {
  const id = req.params.id;
  const user = usersController.listUserById(id);
  return res.status(200).json(user);
});

routes.post('', (req, res) => {
  const createdUser = usersController.createUser({email, password} = req.body);
  return res.status(200).json(createdUser);
})


module.exports = routes;
