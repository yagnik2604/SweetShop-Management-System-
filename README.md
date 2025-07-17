# 🍬 Sweet Shop Management System

A simple **Node.js + Express** application to manage a sweet shop’s inventory using a clean MVC structure and **MongoDB**. Built following **TDD (Test-Driven Development)** principles, this app supports viewing, adding, editing, and purchasing sweets with EJS views and test coverage.

🔗 [Project Repository](https://github.com/yagnik2604/SweetShop-Management-System)

---

## ✨ Features

- 📋 View all sweets in the inventory  
- ➕ Add new sweets  
- ✏️ Edit existing sweet details  
- 🛒 Purchase sweets and update stock  
- 🖼️ EJS-based frontend templates  
- 🗃️ MongoDB integration via Mongoose  
- 🧪 Test coverage using Jest & Supertest  

---

## 🧱 Project Structure

```
kata_sweet_shop_management_system/
├── app.js                        # Express app setup
├── server.js                     # Starts the server
├── config/
│   └── db-connection.js          # MongoDB connection setup
├── controller/
│   └── controller.js             # Sweet logic (CRUD + purchase)
├── models/
│   └── Sweet-model.js            # Mongoose model for sweets
├── routes/
│   └── sweetRoutes.js            # Route definitions
├── tests/
│   └── sweet.test.js             # TDD tests with Jest & Supertest
├── view/                         # EJS templates for UI
│   ├── index.ejs
│   ├── addSweet.ejs
│   ├── editSweet.ejs
│   └── purchaseSweet.ejs
├── package.json
└── package-lock.json
```

---

## 🚀 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/yagnik2604/SweetShop-Management-System.git
cd SweetShop-Management-System
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory with the following content:

```
MONGODB_URI=" "
TEST_MONGODB_URI=""
PORT=
```

> Make sure MongoDB is installed and running locally on your machine.

### 4. Start the development server

```bash
npx nodemon server.js
```

Open your browser and navigate to:  
👉 `http://localhost:3000`

### 5. Run tests

This project uses **Jest** and **Supertest** for unit and integration testing.

```bash
npm test
```

This will execute all test cases in the `tests/` folder.

---

## 🧪 Test Coverage

Tests are written for all main sweet-related operations:

- ✅ Add Sweet  
- ✅ Get All Sweets  
- ✅ Edit Sweet  
- ✅ Purchase Sweet  
- ✅ Error Handling & Edge Cases  

Testing tools:

- **Jest** for test runner & assertions  
- **Supertest** for HTTP request testing  

---

## 🧰 Tech Stack & Frameworks

- **Node.js** + **Express.js** — Backend framework  
- **MongoDB** + **Mongoose** — Database 
- **EJS** — Templating engine for server-rendered UI  
- **Jest** + **Supertest** — Test frameworks  
- **Nodemon** — Dev server with live reload  

---

## 💡 Future Enhancements

- React-based frontend  
- Admin login and authentication  
- Dashboard with inventory analytics  
- Enhanced error logging and validation  

---


## 👤 Author

**Yagnik Chavadhari**  
📧 Email: yagnikchavadhari@gmail.com  
🔗 GitHub: [@yagnik2604](https://github.com/yagnik2604)
