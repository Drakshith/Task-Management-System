# Task Management System

A simple Task Management System that allows users to create, view, update, and delete tasks. This project demonstrates core CRUD operations, a RESTful API, and a minimal frontend for task management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Optional Features](#optional-features)
- [Future Enhancements](#future-enhancements)

---

## Features

- **Create**: Add new tasks with a title, description, and due date.
- **Read**: View a list of all tasks with their details.
- **Update**: Edit task details or update the status (Pending/Completed).
- **Delete**: Remove tasks with a confirmation prompt.

---

## Technologies Used

- **Backend**: Flask (Python), SQLite
- **Frontend**: React (JavaScript)
- **Styling**: CSS
- **API Testing**: Postman

---

## Folder Structure

```
task-manager/
├── backend/               # Backend code
│   ├── app.py             # Main Flask application
│   ├── tasks.db        # SQLite database
├── frontend/              # Frontend code
│   ├── public/            # HTML template and static assets
│   ├── src/               # React components and logic
│   │   ├── App.js         # Main React app
│   │   ├── App.css        # Styling for the app
│   └── package.json       # Frontend dependencies
├── README.md              # Project documentation
```

---

## Setup Instructions

### **Backend Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager/backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the backend server:
   ```bash
   python app.py
   ```
   - Backend runs on `http://localhost:5000`.

---

### **Frontend Setup**

1. Navigate to the frontend directory:
   ```bash
   cd task-manager/frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   - Frontend runs on `http://localhost:3000`.

---

## Usage

1. **Create a Task**:
   - Fill out the task creation form on the homepage.
   - Click **Add Task** to save.

2. **View Tasks**:
   - All tasks appear in a list.
   - Tasks show the title, description and due date.

3. **Edit or Delete Tasks**:
   - Use the **Edit** button to modify a task.
   - Use the **Delete** button to remove a task (confirmation required).

---

## Optional Features

- **Confirmation Prompt**: Ensures tasks are not accidentally deleted.
- **Error Handling**: Validates input fields (e.g., no empty titles).

---

## Future Enhancements

- Add user authentication for personalized task management.
- Include reminders/notifications for due tasks.
- Improve UI with animations and responsiveness.
- Add bulk actions for tasks (e.g., bulk delete or update).

---

## Contributing

Contributions are welcome! Please fork the repository, make changes, and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
