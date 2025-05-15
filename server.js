const express = require('express');
const app = express();
require('dotenv').config();
const orderRoutes = require('./routes/orders');
const inventoryRoutes = require('./routes/inventory');

app.use(express.json());

app.use('/api/orders', orderRoutes);
app.use('/api/inventory', inventoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));