serverED (Lok Sahayak Backend)serverED is the backend server application for Lok Sahayak. It provides authentication services, user management, and AI-powered chat capabilities (including image context analysis) to the client application.🚀 FeaturesUser Authentication: Secure Signup and Signin endpoints.AI Integration: Dedicated endpoints for AI chat interactions.Multimodal capabilities: Experimental support for AI chat using image context.Middleware Support: Custom middlewares for error handling and request processing.MVC Architecture: Organized structure with Models, Routes, and Controllers.🛠️ Tech StackRuntime Environment: Node.jsFramework: Express.jsDatabase: MongoDB (Assumed based on models directory)AI Integration: Custom AI modules located in /ai📂 Folder StructureserverED/
├── ai/             # AI-related logic and modules
├── middlewares/    # Custom middleware functions
├── models/         # Database schemas (Mongoose models)
├── routes/         # API route definitions
├── uploads/        # Directory for file uploads
├── .env            # Environment variables (not included in repo)
├── server.js       # Entry point of the application
└── package.json    # Project dependencies and scripts
🔧 Installation & SetupFollow these steps to run the server locally.1. Clone the Repositorygit clone [https://github.com/Dev-Saurabh-K/serverED.git](https://github.com/Dev-Saurabh-K/serverED.git)
cd serverED
2. Install Dependenciesnpm install
3. Environment ConfigurationCreate a .env file in the root directory and add the necessary environment variables.(Note: You may need to verify the exact variable names required by examining server.js or the ai folder)PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
# Add AI API keys if required (e.g., OPENAI_API_KEY)
4. Run the Servernpm start
# or for development
npm run dev
📡 API EndpointsAuthentication (/auth)MethodEndpointDescriptionPOST/auth/signupRegister a new userPOST/auth/signinUser loginUser & AI Services (/user)MethodEndpointDescriptionPOST/user/chatAI Chat interface (Experimental)GET/user/dataAI Chat using image as context (Experimental)🤝 ContributingContributions are welcome! Please feel free to submit a Pull Request.Fork the projectCreate your feature branch (git checkout -b feature/AmazingFeature)Commit your changes (git commit -m 'Add some AmazingFeature')Push to the branch (git push origin feature/AmazingFeature)Open a Pull Request📄 LicenseDistributed under the MIT License. See LICENSE for more information.
