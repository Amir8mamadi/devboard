# DevBoard

A modern and responsive task management dashboard built with React.

DevBoard is a frontend portfolio project designed to practice and demonstrate modern React concepts, including Context API, `useReducer`, React Router, Axios, reusable components, and responsive UI development.

## 🚀 Live Demo

Coming soon...

## 📸 Preview

Coming soon...

## ✨ Features

* Dashboard with task statistics
* Create new tasks
* Edit tasks
* Delete tasks
* Mark tasks as completed or pending
* Search tasks
* Filter tasks by status
* Task details page
* Responsive design
* Mobile sidebar navigation
* Fixed desktop sidebar
* Loading and error states
* Reusable React components

## 🛠️ Technologies

* React
* React Router
* Axios
* Context API
* `useReducer`
* CSS Modules
* React Icons
* Vite
* JavaScript (ES6+)

## 📂 Project Structure

```text
src/
├── components/
│   ├── CreateTask.jsx
│   ├── ErrorMessage.jsx
│   ├── Loading.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   └── TaskCard.jsx
│
├── context/
│   └── TaskContext.jsx
│
├── layouts/
│   └── DashboardLayout.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Projects.jsx
│   ├── Settings.jsx
│   ├── TaskDetails.jsx
│   ├── Tasks.jsx
│   └── Team.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
└── main.jsx
```

## 🌐 API

The project uses [DummyJSON](https://dummyjson.com/todos) to fetch the initial task data.

Task creation, editing, completion, and deletion are currently handled through local React state.

> **Note:** DummyJSON simulates mutation requests, so local changes are not persisted after refreshing the page.

## 🧠 React Concepts Practiced

This project was built to strengthen practical React skills, including:

* `useState`
* `useEffect`
* `useReducer`
* `useContext`
* Custom Context hooks
* React Router
* Dynamic routes
* Controlled inputs
* Conditional rendering
* Array filtering and mapping
* Component composition
* Reusable components
* CSS Modules
* Responsive design

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Amir8mamadi/devboard.git
```

### 2. Navigate to the project

```bash
cd devboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

## 📌 Future Improvements

* TypeScript
* Next.js
* Redux Toolkit
* Persistent backend
* Authentication
* Real user management
* Real project management
* Dark mode
* Advanced task sorting
* Due dates and task priorities

## 👨‍💻 Author

**Amir Mohammadi**

GitHub: [@Amir8mamadi](https://github.com/Amir8mamadi)

## 📄 License

This project was created for learning and portfolio purposes.
