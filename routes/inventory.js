const express = require('express');
const router = express.Router();
const db = require('../db');

// Get inventory
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM inventory');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update inventory
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  try {
    await db.execute('UPDATE inventory SET quantity = ? WHERE id = ?', [quantity, id]);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;