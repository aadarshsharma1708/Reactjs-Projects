# 📝 To-Do App with Context API & Local Storage

A simple and efficient **To-Do List** application built with **React.js**, leveraging the **Context API** for state management and **localStorage** for persistent data.  
This app allows users to add, update, complete, and delete tasks, with all data preserved across browser sessions.

---

## 🚀 Features

- ➕ Add new to-do tasks  
- ✅ Mark tasks as completed or pending  
- 🗑️ Delete tasks  
- 💾 Persist data in browser using **localStorage**  
- 🌐 Global state management with **React Context API**  
- 🎨 Clean and minimal UI with React best practices  

---

## 🎥 Demo

> (Add your live demo link here if you’ve deployed it, e.g., GitHub Pages or Vercel)

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or above recommended)  
- npm or yarn package manager  

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aadarshsharma1708/Reactjs-Projects.git
   cd Reactjs-Projects/10TodoContextLocal
Install dependencies

npm install
# or
yarn install


### Install dependencies
bash
npm install
# or
yarn install


The app will be available at http://localhost:3000

Build for production

npm run build
# or
yarn build


Optimized files will be generated in the build/ directory.

📂 Project Structure
10TodoContextLocal/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TodoList.jsx
│   │   ├── TodoItem.jsx
│   │   └── TodoForm.jsx
│   ├── context/
│   │   └── TodoContext.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md


components/ – UI components for listing, adding, and managing tasks

context/ – Provides global state with Context API

hooks/ – Custom hook (useLocalStorage) to sync tasks with localStorage

App.jsx – Root component connecting everything together

🛠️ Tech Stack

React.js – Frontend framework

Context API – Global state management

localStorage – Browser storage for persistence

JavaScript (ES6+) – Core language

CSS – Styling

📖 How It Works

On app load, tasks are fetched from localStorage (if available).

A Context Provider manages global state (tasks, add, update, delete).

User actions (add, complete, delete) update both the state and localStorage.

Components re-render automatically with React’s reactive state updates.

🤝 Contributing

Contributions are welcome!
If you’d like to improve this project:

Open an issue for suggestions or bugs

Submit a pull request with enhancements

👨‍💻 Author

Adarsh Sharma

GitHub

LinkedIn
