const router = require('express').Router();
const userController = require('../../controllers/UserController');

router.get('/', (_req, res) => {
  const users = userController.getAllUsers();
  return res.status(200).json({
    ok: true,
    results: users
  });
});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
