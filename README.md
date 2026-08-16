Tarot Club 🔮✨
A full-stack MERN (MongoDB, Express, React, Node.js) web application offering an interactive tarot reading and community experience, featuring real-time chat and user authentication.

🚀 Features
Secure Authentication: User sign-up, login, and protected route management using cookies and sessions.

Interactive Tarot Experience: Clean and immersive UI designed around a mystical theme.

Real-time Communication: Integrated WebSocket functionality for live messaging and chat features.

Responsive Design: Fully optimized layout for seamless usage across devices.

🛠️ Tech Stack
Frontend
React.js (Vite)

Tailwind CSS / Custom CSS

Axios for API communication

Backend
Node.js & Express.js

MongoDB & Mongoose (Database & Models)

Socket.io (Real-time features)

JSON Web Tokens / Cookie-based Auth

📦 Project Structure
Plaintext
tarot-mern-project/
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
├── server/          # Node.js & Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
└── README.md
⚙️ Getting Started Locally
To run this project on your local machine, follow these steps:

1. Clone the repository
Bash
git clone https://github.com/your-username/tarot-mern-project.git
cd tarot-mern-project
2. Setup the Backend
Bash
cd server
npm install
Create a .env file inside the server folder and add your environment variables:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the backend server:

Bash
npm run server
3. Setup the Frontend
Open a new terminal window, navigate to the client folder, install dependencies, and start the development server:

Bash
cd client
npm install
npm run dev
🌐 Deployment
Frontend: Deployed on Vercel

Backend: Deployed on Vercel 
