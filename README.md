# 🍕 Food Delivery Website

A full-stack food delivery web application built with the **MERN stack** (MongoDB, Express, React, Node.js) featuring a customer-facing frontend, an admin dashboard, and a RESTful API backend.

## 📋 Table of Contents

- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)

---

## 🏗 Architecture Overview

The project is a **monorepo** with three distinct applications:

```
Food-delivery-website/
├── client/       # Customer-facing frontend (React + Vite)
├── admin/        # Admin dashboard (React + Vite)
└── server/       # Backend API (Express + MongoDB)
```

- **Client** → Customers browse food, manage cart, place orders, and track them.
- **Admin** → Restaurant staff add/edit food items, view orders, and update order statuses.
- **Server** → RESTful API handling authentication, food management, cart operations, order processing, and Stripe payment integration.

---

## 📁 Project Structure

### `server/` — Backend API

| Directory/File        | Purpose                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------- |
| `server.js`           | Express app entry point, middleware config, route mounting                              |
| `config/db.js`        | MongoDB connection via Mongoose                                                         |
| `models/`             | Mongoose schemas: `foodModel`, `userModel`, `orderModel`                                |
| `controllers/`        | Business logic: `foodController`, `userController`, `cartController`, `orderController` |
| `routes/`             | Express routers: `foodRoute`, `userRoute`, `cartRoute`, `orderRoute`, `health`          |
| `middlewares/auth.js` | JWT-based authentication middleware                                                     |
| `uploads/`            | Directory for food images uploaded via Multer                                           |

### `client/` — Customer Frontend

| Directory/File                 | Purpose                                                                                                        |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `src/App.jsx`                  | Root component with React Router configuration                                                                 |
| `src/context/StoreContext.jsx` | Global state: cart, token, food list via React Context                                                         |
| `src/pages/`                   | Page components: `Home`, `Cart`, `PlaceOrder`, `Verify`, `MyOrders`                                            |
| `src/components/`              | Reusable UI: `Navbar`, `HeroSection`, `ExploreMenu`, `FoodDisplay`, `FoodItem`, `Cart`, `LoginPopup`, `Footer` |
| `src/assets/`                  | Static assets and images                                                                                       |

### `admin/` — Admin Dashboard

| Directory/File    | Purpose                                                                    |
| ----------------- | -------------------------------------------------------------------------- |
| `src/App.jsx`     | Root component with sidebar, navbar, and routing                           |
| `src/pages/`      | `Add` (add food), `List` (view/manage food), `Orders` (view/update orders) |
| `src/components/` | `Navbar`, `Sidebar`                                                        |

---

## 🛠 Tech Stack

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js (v5)
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JSON Web Tokens (JWT) + bcrypt
- **File Upload:** Multer
- **Payments:** Stripe
- **Validation:** validator library

### Frontend (Client & Admin)

- **Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router DOM v7
- **HTTP Client:** Axios
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **Notifications:** React Toastify
- **Icons:** Lucide React

---

## ✨ Features

### Customer Features

- **User Authentication** — Register and login with email/password (JWT-based)
- **Food Menu Browsing** — Browse food items with category filtering
- **Shopping Cart** — Add/remove items, real-time total calculation
- **Stripe Payment** — Secure checkout via Stripe payment sessions
- **Order Tracking** — View order history and current status
- **Responsive Design** — Mobile-friendly UI with Tailwind CSS

### Admin Features

- **Food Management** — Add new food items with images, edit, remove
- **Order Management** — View all orders, update order status (Food Processing → Out for Delivery → Delivered)
- **Dashboard** — Sidebar navigation between Add, List, and Orders pages

### Backend API

- **RESTful Endpoints** — Clean API structure with versioned routes
- **JWT Middleware** — Protected routes for cart and order operations
- **Stripe Integration** — Server-side payment session creation and verification
- **Health Check** — `/api/health` endpoint for monitoring

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- MongoDB (local or Atlas)
- Stripe account (for payment processing)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Food-delivery-website.git
cd Food-delivery-website
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
PORT=3000
```

Start the server:

```bash
npm run server
```

### 3. Client Setup

```bash
cd client
npm install
```

Create a `.env` file in the `client/` directory:

```
VITE_API_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

### 4. Admin Setup

```bash
cd admin
npm install
```

Create a `.env` file in the `admin/` directory:

```
VITE_API_URL=http://localhost:3000
```

Start the development server:

```bash
npm run dev
```

The applications will be available at:

- **Client:** http://localhost:5173
- **Admin:** http://localhost:5174
- **API:** http://localhost:3000

---

## 🔐 Environment Variables

### Server (`server/.env`)

| Variable            | Description                       |
| ------------------- | --------------------------------- |
| `MONGODB_URI`       | MongoDB connection string         |
| `JWT_SECRET`        | Secret key for signing JWT tokens |
| `STRIPE_SECRET_KEY` | Stripe secret key for payments    |
| `FRONTEND_URL`      | Client URL (for Stripe redirect)  |
| `PORT`              | Server port (default: 3000)       |

### Client (`client/.env`)

| Variable       | Description          |
| -------------- | -------------------- |
| `VITE_API_URL` | Backend API base URL |

### Admin (`admin/.env`)

| Variable       | Description          |
| -------------- | -------------------- |
| `VITE_API_URL` | Backend API base URL |

---

## 📡 API Documentation

### Base URL: `http://localhost:3000`

### Health

| Method | Endpoint      | Description              |
| ------ | ------------- | ------------------------ |
| GET    | `/api/health` | Health check with uptime |

### Food

| Method | Endpoint           | Auth | Description                     |
| ------ | ------------------ | ---- | ------------------------------- |
| GET    | `/api/food/list`   | No   | Get all food items              |
| POST   | `/api/food/add`    | No   | Add a new food item (multipart) |
| POST   | `/api/food/remove` | No   | Remove a food item by ID        |

### User

| Method | Endpoint             | Auth | Description           |
| ------ | -------------------- | ---- | --------------------- |
| POST   | `/api/user/register` | No   | Register a new user   |
| POST   | `/api/user/login`    | No   | Login and receive JWT |

### Cart (Protected)

| Method | Endpoint           | Auth | Description           |
| ------ | ------------------ | ---- | --------------------- |
| POST   | `/api/cart/add`    | Yes  | Add item to cart      |
| POST   | `/api/cart/remove` | Yes  | Remove item from cart |
| POST   | `/api/cart/get`    | Yes  | Get current cart data |

### Order (Protected)

| Method | Endpoint                | Auth | Description                          |
| ------ | ----------------------- | ---- | ------------------------------------ |
| POST   | `/api/order/placeorder` | Yes  | Place order (creates Stripe session) |
| POST   | `/api/order/verify`     | No   | Verify Stripe payment success        |
| POST   | `/api/order/userorders` | Yes  | Get logged-in user's orders          |
| GET    | `/api/order/list`       | No   | List all orders (admin)              |
| POST   | `/api/order/status`     | No   | Update order status (admin)          |

### Static Files

| Endpoint        | Description                 |
| --------------- | --------------------------- |
| `/images/:file` | Serves uploaded food images |

### Authentication

- JWT tokens are passed in the request header: `{ token: "your_jwt_token" }`
- Protected routes require a valid token; the middleware extracts the user ID and attaches it to `req.body.userId`

---

## 🚢 Deployment

All three applications are configured for deployment on **Vercel**:

- `vercel.json` files are provided in `server/`, `client/`, and `admin/` directories.
- For the server, ensure environment variables are configured in Vercel's dashboard.
- For the client and admin, set `VITE_API_URL` to the deployed API URL.

---

## 📄 License

This project is licensed under the ISC License.
