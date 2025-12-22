# MyTask

[![Deploy](https://img.shields.io/badge/Deploy-Firebase-orange)](https://my-task-9a967.web.app/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.x-yellow)](https://firebase.google.com/)

English Version | [Versão em Português](README.md)

## 📋 About the Project

MyTask is a modern and intuitive personal task manager, developed with React and Firebase. The application allows users to organize their daily activities efficiently and securely.

🚀 **[Access the application](https://my-task-9a967.web.app/)**

## ✨ Features

- ✅ **Complete Task CRUD**

  - Create new tasks with form validation
  - View list of registered tasks
  - Edit existing task information
  - Delete tasks with confirmation

- 🔐 **User Authentication**

  - New user registration
  - Secure login
  - Password recovery via email
  - User email verification

- 🔍 **Filters and Search**
  - Basic filters to facilitate task location
  - Responsive and intuitive interface

## 🛠️ Technologies Used

- **React** - JavaScript library for building interfaces
- **Vite** - Build tool and dev server
- **Firebase Authentication** - User authentication
- **Firebase Firestore** - Real-time NoSQL database
- **Bootstrap** - CSS framework for styling

## 📦 How to Run the Project

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/flaviare1s/mytask.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mytask
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure Firebase environment variables:

   - Create a configuration file with your Firebase credentials
   - Configure Authentication and Firestore in the Firebase console

5. Run the project in development mode:

   ```bash
   npm run dev
   ```

6. Access `http://localhost:5173` in your browser

## 🚀 Deploy

The project is hosted on Firebase Hosting and can be accessed at:
**https://my-task-9a967.web.app/**

To deploy:

```bash
npm run build
firebase deploy
```

## 📁 Project Structure

```
mytask/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/          # Application pages
│   ├── contexts/       # React contexts
│   ├── firebase/       # Firebase configuration and functions
│   ├── styles/         # Style files
│   └── assets/         # Images and static resources
├── public/             # Public files
└── package.json        # Project dependencies
```

## 🤝 Contributions

Contributions are welcome! To contribute:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/MyFeature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/MyFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT license.

## 👤 Author

**Flavia Reis**

- GitHub: [@flaviare1s](https://github.com/flaviare1s)

---

Developed by [Flavia Reis](https://github.com/flaviare1s)
