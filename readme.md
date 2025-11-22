serverED – Lok Sahayak Backend

serverED is the backend server for the Lok Sahayak project.
It provides full authentication, user management, and AI-powered chat endpoints (including optional multimodal/image chat).
The project is built with Node.js, Express, and MongoDB, following a clean, modular structure so anyone can easily understand, modify, and extend it.

Table of Contents

Project Overview

Features

Tech Stack

Folder Structure

Prerequisites

Installation

Environment Variables

NPM Scripts

API Endpoints

File Uploads

Running in Production

Troubleshooting

Contributing

License

Contact

1. Project Overview

serverED is designed as a simple yet powerful REST backend supporting user authentication and AI chat features.
It includes routes for signup, signin, protected user operations, and AI chat.
The backend also supports file uploads (images, documents) stored locally in the uploads folder.

2. Features

• User Signup & Signin
• JWT-based authentication
• Protected routes
• AI chat endpoint (supports text and optional image prompt)
• File uploads using multer (inferred from uploads folder)
• Modular folder structure (routes, models, middlewares, ai logic)

3. Tech Stack

• Node.js
• Express.js
• MongoDB + Mongoose
• JSON Web Tokens (JWT)
• Multer for uploads
• AI Provider (OpenAI or similar)

4. Folder Structure

serverED/
• ai/ → AI related logic (text + multimodal chat)
• middlewares/ → auth middleware, error middleware
• models/ → MongoDB models (User, etc.)
• routes/ → API endpoints (auth, user, ai)
• uploads/ → stored user-uploaded files
• server.js → application entry point
• package.json
• .env (not included in repo)

5. Prerequisites

Before running the project, make sure you have:
• Node.js v16+
• MongoDB (local or Atlas)
• AI provider key (OpenAI key recommended)
• Git

6. Installation

Step 1: Clone the repository
git clone https://github.com/Dev-Saurabh-K/serverED.git

cd serverED

Step 2: Install dependencies
npm install

Step 3: Create .env file
Add required environment variables (shown below).

Step 4: Start the server
npm start
(or npm run dev if you add nodemon)

The API will start on http://localhost:PORT

7. Environment Variables

Your .env file should contain values like these (replace placeholders):

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_key

You may add any other environment variables used inside the ai/ folder.

8. NPM Scripts

Most commonly used scripts:

start → node server.js
dev → nodemon server.js (only if nodemon is installed)
test → placeholder

Check package.json for the exact scripts available.

9. API Endpoints

Below is a reference for the main endpoints used in this backend.

Authentication

Signup
POST /auth/signup
Body fields: name, email, password
Returns user details + token

Signin
POST /auth/signin
Body fields: email, password
Returns JWT token

User Routes (Protected)

Get User Data
GET /user/data
Requires Authorization: Bearer <token>

AI Chat
POST /user/chat
Supports text-based messages and optionally image uploads.
Requires Authorization header.

Example fields:
message: text message
image: uploaded image file (if supported)

10. File Uploads

• Uploaded files are stored in the uploads/ folder.
• Ensure the uploads folder exists and is writable.
• For production hosting, consider switching to cloud file storage (S3, Cloud Storage).

11. Running in Production

• Use pm2 or Docker to keep the server running
• Use HTTPS (through Nginx reverse proxy or hosting platform)
• NEVER commit your .env file
• Ensure MongoDB Atlas is configured with correct network access
• Prefer cloud-based storage for uploaded media

12. Troubleshooting

Common issues:

MongoDB connection error
Check your MONGO_URI and IP access in MongoDB Atlas.

JWT errors
Make sure JWT_SECRET matches the key used in signin.

AI endpoint not working
Check if OPENAI_API_KEY is present and correct.

Port already in use
Change PORT in .env or free the existing process.

Upload errors
Make sure uploads folder exists and your process user has write permissions.

13. Contributing

To contribute:

Fork the repo

Create a new branch

Commit your changes

Push the branch

Create a Pull Request

Please follow clean coding practices and update the README if you add new features.

14. License

This project uses the MIT License.

15. Contact

GitHub Repository: https://github.com/Dev-Saurabh-K/serverED

For improvements, issues, or feature requests, open an issue in the repo.
