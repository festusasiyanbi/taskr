# Taskr - Task Management Application

Taskr is a modern task management application designed to help users efficiently manage their tasks and projects. This application features user authentication, task management, and dynamic task handling. It is built using [Your Stack], with a focus on providing a smooth and intuitive user experience.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
5. [Contributing](#contributing)
6. [License](#license)

## Features

- **User Authentication**: Secure sign-up, login, and password management.
- **Task Management**: Create, update, and delete tasks.
- **Dynamic Placeholders**: Form placeholders update based on previous values.
- **User-friendly Interface**: Clean and intuitive design for an optimal user experience.

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x) or Yarn (>= 1.x)

### Clone the Repository

```bash
git clone https://github.com/festusasiyanbi/taskr.git
cd taskr
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and add the required environment variables. Here is a sample `.env` file:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=your_preferred_port
```

### Run the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:your_preferred_port` in your web browser to access the application.

## Usage

### Authentication

- **Sign Up**: Register a new account by providing a name, email, and password.
- **Login**: Authenticate using your registered email and password.
- **Logout**: End your session to secure your account.

### Task Management

- **Create Task**: Add new tasks by filling out the task form.
- **Update Task**: Modify existing tasks by editing their details.
- **Delete Task**: Remove tasks that are no longer needed.

### Dynamic Placeholders

When updating tasks, the form placeholders dynamically adjust based on previous task values to enhance usability and prevent errors.

## API Endpoints

### Authentication

- **POST /api/auth/signup**
  - Request body: `{ name: string, email: string, password: string }`
  - Response: `{ message: string, user: object }`

- **POST /api/auth/login**
  - Request body: `{ email: string, password: string }`
  - Response: `{ token: string, user: object }`

### Tasks

- **POST /api/tasks**
  - Request body: `{ name: string, description: string }`
  - Response: `{ message: string, task: object }`

- **PUT /api/tasks/:id**
  - Request body: `{ name: string, description: string }`
  - Response: `{ message: string, task: object }`

- **DELETE /api/tasks/:id**
  - Response: `{ message: string }`

- **GET /api/tasks**
  - Response: `{ tasks: array }`

## Contributing

Contributions are welcome! If you'd like to contribute to Taskr, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/festusasiyanbi/taskr/blob/main/LICENSE) file for details.
