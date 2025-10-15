# Livestream App with RTSP Streaming and Overlays
Overview
This is a web application that allows users to view a livestream video from an RTSP URL (e.g., via RTSP.me), add custom overlays (like text or logos), and manage those overlays through a simple CRUD interface. It's designed for easy deployment and use, making it ideal for streaming events, security cameras, or live broadcasts.

# Key Features:
Embed and play a livestream video on a landing page.
Basic controls for play/pause and volume.
Add, edit, delete, and view custom overlays on the video.
Responsive design for desktop and mobile devices.
This project uses a React frontend for the user interface and a Node.js backend with MongoDB for storing overlay settings.

# Prerequisites
Before you get started, ensure you have the following installed:

Node.js (v14 or higher): For running the frontend and backend.
npm (comes with Node.js): For installing dependencies.
MongoDB: A local instance or a cloud service like MongoDB Atlas.
Git (optional): For cloning the repository.
You'll also need an RTSP stream source. Sign up for a service like RTSP.me to convert your RTSP URL into an embeddable format.

# Installation and Setup
Follow these steps to set up and run the project locally.

1. Clone the Repository
bash

Run
Copy code
git clone https://github.com/kunal8987/RTSP.ME  

2. Set Up Environment Variables
Create a .env file in the root directory with the following variables:

For the backend:

Run

MONGO_URI=mongodb://localhost:27017/livestreamdb  # Your MongoDB connection string
PORT=5000  # Backend server port

# Install Dependencies
Backend (Node.js server):
bash

Run

cd backend  
npm install
Frontend (React app):
bash

Run

cd ../frontend  
npm install


Start the Backend
In the backend directory:

bash

Run
npm run server
This will run the Node.js server and set up the CRUD API for overlays.

5. Start the Frontend
In the frontend directory:

bash

Run
npm start


Database Setup
Ensure MongoDB is running.
The backend will automatically connect to your MongoDB instance using the URI in .env. If you're using MongoDB Atlas, update the URI accordingly.
Usage Instructions
Once the app is running, follow these steps to use it.

1. Access the App
Open your browser and go to http://localhost:3000.
You'll see the landing page with a button to play the livestream.


Play the Livestream
Click the "Play Livestream" button to display the embedded video stream.
The video includes basic controls (play, pause, and volume) provided by the RTSP.me player.
3. Manage Overlays
Overlays allow you to add custom elements (e.g., text or logos) on top of the video.

Add an Overlay:
Click the "Add Overlay" button.
A form will appear (in the app) to input details like content, position (X/Y coordinates), and size.
Submit the form to save it via the backend API.
View Overlays:
Overlays will automatically appear on the video once loaded from the API.
