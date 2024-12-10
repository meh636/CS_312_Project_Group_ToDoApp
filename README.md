# ToDo App 🖤

Welcome to the **My To-Do App** built with the **PERN stack** (PostgreSQL, Express.js, React.js, and Node.js). This project allows users to create, view, update, and delete tasks in a simple, interactive to-do list.

🌟 **Features**
- Add new tasks to your to-do list.
- View a list of tasks that you can manage.
- Edit tasks to update their text.
- Delete tasks from the list.
- The app's data is stored in a PostgreSQL database.
- Fully interactive user interface built with React.
- Backend API powered by Node.js and Express.

📷 **Screenshot**

![Screenshot](./public/todo-app-screenshot.png)

🛠️ **Technologies Used**
- **React.js**: Frontend framework for building the user interface.
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for creating the API.
- **PostgreSQL**: Database for storing tasks.
- **CSS**: For styling the application.

🚀 **Getting Started**

Follow these steps to get the project up and running locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
2. **Navigate to the backend directory:**
    ```bash
    cd backend
3. **Install backend dependencies:**
    ```bash
    npm install
4. **Set up the database**
    - Ensure **PostgreSQL** is installed.
    - Create a new database and table for tasks:
    ```bash
    CREATE TABLE todos (
        id SERIAL PRIMARRY KEY,
        rext VARCHAR(255) NOT NULL
    );
5. **Set up the .env file**
    - Create a .env file in the backend directory with the following content:
    ```bash
    DATABASE_URL=postgres://user:password@localhost:5432/todoapp
6. **Run the backend server:**
    ```bash
    npm start
- The backend server should be running at http://localhost:5001.

7. **Set up the frontend (client):**
    - Navigate to the frontend directory:
    ```bash
    cd ../frontend
8. **Install frontend dependencies:**
    ```bash npm install
9. **Run the frontend developement server:**
    ```bash
    npm start
- The frontend should be running at http://localhoat:3000

10. **Access the app:**
- Open your browser and go to http://localhost:3000 to use the To-Do App.

🛠 **Development**
You can develop the project by making changes to the code in the respective directories. Both the backend and frontend servers can be run simultaneously to see live changes.

📦 **Deployment**
The project can be deployed to a hosting platform like Heroku, Vercel, or Netlify. Make sure to configure the environment variables and database connections accordingly.

🌐 **API Integration**
This project uses a custom backend API built with Express.js to manage tasks in the PostgreSQL database.

📂 **Project Structure**
```bash 
todo-app/
│
├── /frontend/              # React frontend
│   ├── /public/            # Static assets (CSS, images)
│   ├── /src/               # React components and logic
│   ├── package.json        # Frontend dependencies
│   └── ...                 # Other React-related files
│
├── /backend/               # Express backend
│   ├── app.js              # Main application file
│   ├── db.js               # PostgreSQL database connection
│   ├── package.json        # Backend dependencies
│   ├── .env                # Environment variables
│   └── ...                 # Backend-specific files
│
├── README.md               # Project documentation
└── .gitignore              # Ignore files like node_modules and .env
```
🚧 **Future Improvements**
- Add user authentication for saving tasks tied to specific users.
- Implement sorting and filtering for tasks.
- Implement error handling for database failures and form validation.

📝 **License**
This project is licensed under the MIT License.

✨ Contributors
- Mary - Project Creator

Feel free to contribute! Submit a pull request or open an issue to improve the project.