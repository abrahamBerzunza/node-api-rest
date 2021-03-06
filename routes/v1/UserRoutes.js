const router = require('express').Router();
const userController = require('../../controllers/UserController');
const userMiddleware = require('../../middlewares/UserMiddleware');

router.get('/', (_req, res) => {
  const users = userController.getAllUsers();

  return res.status(200).json({
    ok: true,
    results: users
  });
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = userController.getUserById(id);

  return res.status(200).json({
    ok: true,
    result: user ? user : {}
  });
});

router.post('/', userMiddleware.validateUser, (req, res) => {
  const userData = req.body;

  user = userController.createUser(userData);

  return res.status(201).json({
    ok: true,
    result: user
  });
});

router.put('/:id', userMiddleware.validateUser, (req, res) => {
  const id = Number(req.params.id);
  const userData = req.body;

  const user = userController.updateUserById(id, userData);

  return res.status(200).json({
    ok: true,
    result: user
  });
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);

  userController.deleteUserById(id);
  return res.status(204).end();
});

module.exports = router;
