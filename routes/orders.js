const express = require('express');
const router = express.Router();
const db = require('../db');

// Place a new order
router.post('/', async (req, res) => {
  const { customerName, product, quantity } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO orders (customerName, product, quantity) VALUES (?, ?, ?)',
      [customerName, product, quantity]
    );
    res.status(201).json({ orderId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM orders');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;