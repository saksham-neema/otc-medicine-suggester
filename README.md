💊 OTC Medicine Suggester
Live Demo: (https://otc-medicine-suggester-1.onrender.com/)

![screenshot](./client/public/Screenshot%202025-09-15%20203059.png)
![screenshot](./client/public/Screenshot%202025-09-15%20203236.png)
![screenshot](./client/public/Screenshot%202025-09-15%20203252.png)
![screenshot](./client/public/Screenshot%202025-09-16%20145637.png)

📝 Project Description
The OTC Medicine Suggester is a full-stack web application designed to provide users with quick, AI-powered suggestions for over-the-counter (OTC) medicines based on their symptoms. The application features a simple and intuitive frontend where users can input their symptoms. This information is then sent to a powerful AI model, which generates relevant and helpful medicine suggestions.

Important: The suggestions provided are for informational purposes only and are not a substitute for professional medical advice. Always consult a healthcare professional before taking any medication.

✨ Key Features
Symptom-Based Suggestions: Get tailored medicine recommendations by simply typing in your symptoms.

AI-Powered Backend: Utilizes the cutting-edge NVIDIA AI API for intelligent and accurate responses.

Intuitive UI: A clean and easy-to-use interface built with React.

Full-Stack Architecture: Seamless integration of a React frontend and a Node.js backend.

💻 Technical Stack
Frontend:

React: A JavaScript library for building user interfaces.

Vite: A fast build tool that provides a smooth development experience.

Axios: A promise-based HTTP client for making API requests.

Backend:

Node.js: A JavaScript runtime for building the server-side logic.

Express.js: A minimal and flexible Node.js web application framework.

OpenAI SDK: Used to connect to the NVIDIA AI API.

CORS: A Node.js package for providing a Connect/Express middleware.

AI Model:

NVIDIA AI API: llama-3.1-nemotron-70b-instruct

🚀 Getting Started
Prerequisites
Node.js (LTS version recommended)

npm

An NVIDIA AI API key

Installation
Clone the repository:

Bash

git clone https://github.com/saksham-neema/otc-medicine-suggester.git

cd your-repo-name
Set up the backend:

Navigate to the server directory:

Bash

cd server
Install dependencies:

Bash

npm install
Create a .env file in the server directory and add your NVIDIA API key:

NVIDIA_API_KEY=YOUR_API_KEY_HERE
Start the backend server:

Bash

node server.js
The server will run on http://localhost:5000.

Set up the frontend:

Open a new terminal and navigate to the client directory:

Bash

cd ../client
Install dependencies:

Bash

npm install
Start the frontend development server:

Bash

npm run dev
The app will be available at http://localhost:5173 (or a similar address).

🤝 Contribution
Feel free to fork this repository and contribute.

Fork the project.

Create your feature branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

If you find any bugs or have suggestions, please open an issue.

👨‍💻 Creator
This project was built by:

Saksham Neema

Connect via LinkedIn: www.linkedin.com/in/saksham-neema

License
This project is licensed under the MIT License. See the LICENSE file for details.
