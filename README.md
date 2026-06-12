# Personal Task Manager

A full-stack Task Manager application built using React, Node.js, Express, and MongoDB.

## Features

### Task Management

* Create Tasks
* Edit Tasks
* Delete Tasks
* Mark Tasks as Completed
* Drag and Drop Task Reordering

### Task Organization

* Search Tasks by Title
* Filter Tasks

  * All Tasks
  * Active Tasks
  * Completed Tasks

### Due Date Management

* Set Due Dates
* Overdue Task Highlighting

### User Interface

* Responsive Design
* Clean and Modern UI
* Real-Time Task Updates

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* @hello-pangea/dnd

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Deployment

* Render
* MongoDB Atlas

---

## Project Structure

```bash
TaskApp
│
├── Backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── db
│   │   └── utils
│   │
│   ├── app.js
│   ├── index.js
│   └── package.json
│
├── Frontend
│   ├── src
│   │   ├── Components
│   │   ├── Pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/sid2127/Task-Manager.git
```

### Backend Setup

```bash
cd Backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

---

## Environment Variables

### Backend (.env)

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string
```

### Frontend (.env)

```env
VITE_SERVER_URL=http://localhost:3000
```

---

## API Endpoints

### Task Routes

| Method | Endpoint                              | Description        |
| ------ | ------------------------------------- | ------------------ |
| GET    | /api/v1/task/getAllTasks              | Get All Tasks      |
| GET    | /api/v1/task/getTaskById/:taskId      | Get Single Task    |
| POST   | /api/v1/task/createTask               | Create Task        |
| PUT    | /api/v1/task/updateTask/:taskId       | Update Task        |
| DELETE | /api/v1/task/deleteTask/:taskId       | Delete Task        |
| PATCH  | /api/v1/task/toggleTaskStatus/:taskId | Toggle Task Status |

---

## Future Improvements

* User Authentication
* Task Categories
* Task Priority Levels
* Task Reminders
* Dark Mode
* Team Collaboration

---

27
