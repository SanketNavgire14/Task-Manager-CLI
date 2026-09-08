# 📝 Task Manager (CLI)

A simple command-line task manager built with Node.js. It allows you to add, list, complete, reject, and remove tasks. All data is stored in memory (temporary) during the session.

## ✨ Features

- Add new tasks
- List all tasks
- Mark tasks as completed or rejected
- View only completed or rejected tasks
- Remove tasks
- Help command to see all available commands

## 🛠️ Prerequisites

- **Node.js** installed on your system (version 12 or higher recommended)

If you don't have Node.js installed, download it from the official website:  
[https://nodejs.org/](https://nodejs.org/)

## 📦 Installation

1. **Clone the repository** (or download the code)
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
   ```

2. **Install the required npm package**
   This project uses the `readline-sync` package to take user input from the terminal.
   ```bash
   npm install readline-sync
   ```

   If you don't have a `package.json` file yet, you can initialize one with:
   ```bash
   npm init -y
   ```
   Then run the install command.

## 🚀 Usage

Run the program using Node.js:

```bash
node manage.js
```

*(If your main file has a different name, replace `manage.js` with your actual filename.)*

Once started, you'll see a welcome message and a list of available commands.

### Available Commands

| Command     | Description                         |
|-------------|-------------------------------------|
| `help`      | Show all commands                   |
| `add`       | Add a new task                      |
| `list`      | Show all tasks                      |
| `complete`  | Mark a task as completed (by ID)    |
| `reject`    | Mark a task as rejected (by ID)     |
| `completed` | List only completed tasks           |
| `rejected`  | List only rejected tasks            |
| `remove`    | Delete a task (by ID)               |
| `exit`      | Quit the program                    |

## 📋 Example

```
Welcome To My Task Manager
This Is Task Managers Commands

    //-    help                   list of all commands
    //-    add                    add a new task
    //-    list                   list of all Tasks
    //-    complete               make status completed
    //-    reject                 make status rejected
    //-    completed              list all completed tasks
    //-    rejected               list all rejected tasks
    //-    remove                 remove Task from task list
    //-    exit                   exit from the task manager  

Enter Command : add
enter your new task : complete assignment
your task successfully added

Enter Command : list
[
  { id: 1, task: 'first task', status: 'pending', priority: 'high' },
  { id: 2, task: 'complete assignment', status: 'pending', priority: 'high' }
]
```

## 📝 Notes

- All tasks are stored temporarily in memory and will be lost when you exit the program.
- The task ID is automatically assigned based on the order of addition.
- The priority is set to "high" by default for all new tasks.

## 📄 License

This project is open source and free to use.

---

**Happy Task Managing!** 😊