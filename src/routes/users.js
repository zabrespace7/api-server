const { Router } = require('express');
const router = Router();

const users = [];

router.get('/', (req, res) => {
  res.json({ users, total: users.length });
});

router.post('/', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }
  const user = { id: Date.now().toString(36), name, email, createdAt: new Date() };
  users.push(user);
  res.status(201).json(user);
});

router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

module.exports = router;