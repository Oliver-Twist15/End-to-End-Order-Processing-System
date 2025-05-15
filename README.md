#  Order Management API

A scalable and modular **Order Management System API** built with **Node.js**, **Express.js**, and **MySQL**, designed to streamline order placement, tracking, and inventory management.

##  Features

-  Place and manage customer orders
-  Inventory tracking and updates
-  Order status updates (e.g., pending, shipped, delivered)
-  Secure and structured RESTful routes
-  Docker support for containerized deployment
-  Optimized to handle 5000+ requests per minute

##  Tech Stack

- Node.js
- Express.js
- MySQL
- Sequelize (ORM)
- Docker
- dotenv

##  Project Structure

```
order-management-api/
├── app.js
├── package.json
├── .env
├── Dockerfile
├── config/
│   └── db.js
├── controllers/
│   └── orderController.js
├── models/
│   └── orderModel.js
├── routes/
│   └── orderRoutes.js
```

##  Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/order-management-api.git
   cd order-management-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file using the `.env.example` provided and update your DB credentials:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=order_db
   PORT=3000
   ```

4. **Run MySQL server**
   Make sure your MySQL server is running and the database (`order_db`) exists.

5. **Run the app**
   ```bash
   npm start
   ```

6. **Test API endpoints** using Postman or curl:
   - `POST /api/orders` – Create an order
   - `GET /api/orders` – List all orders
   - `PUT /api/orders/:id` – Update order status
   - `DELETE /api/orders/:id` – Delete an order

##  Docker 

To run the project with Docker:

```bash
docker build -t order-management-api .
docker run -p 3000:3000 order-management-api
```

##  Author

**Mayank Sharma**  
linkedin.com/in/mayank-sharma-359807230/
📧 MAYANKARYAN309@GMAIL.COM
