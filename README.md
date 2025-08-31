DocSummary-AI

DocSummary-AI is a full-stack web application that allows users to upload PDF or image documents, extract text, and generate concise summaries with customizable tone and length. Built with React (frontend) and Node.js/Express (backend), it leverages Google Generative AI (Gemini) for advanced summarization.

✨ Features

Upload Documents: Drag & drop or select PDFs, PNGs, or JPGs (up to 10MB).

Extract Text: Automatically extract text from uploaded documents using OCR (Tesseract.js for images, pdf-parse for PDFs).

Generate Summary: Create plain-text summaries with customizable length (Short, Medium, Long).


🛠️ Tech Stack

Frontend: React, Vite, TailwindCSS

Backend: Node.js, Express, Multer, Tesseract.js, pdf-parse

AI: Google Generative AI (Gemini)


🌐 Live Demo

Access the deployed app at:
👉 https://[docsummary-ai.onrender.com/
](https://docsummary-ai.onrender.com/)
🚀 Getting Started
✅ Prerequisites

Node.js & npm

Google Generative AI API Key (Gemini)


🔧 Installation

Clone the repository

git clone https://github.com/your-username/DocSummary-AI.git
cd DocSummary-AI


Install dependencies and build
(Run from the root folder — no need to cd into frontend/backend separately)

npm install
npm run build


Add your Gemini API key

echo "GEMINI_API_KEY=your_api_key_here" > backend/.env

▶️ Running the App
Development Mode

Run the frontend:

cd frontend
npm run dev


Run the backend:

cd backend
npm run dev


Open the app at: http://localhost:5173

Production / Build Mode

From the root folder, start the backend (which serves the built frontend):

npm start


Open the app at: http://localhost:5000


📖 Usage

Upload a PDF or image.

Extract text from the document.

Select summary length.


📂 Project Structure
new-project/
├── backend/
│   ├── .env                        # Environment variables (API keys, config)
│   ├── package.json                # Backend dependencies and scripts
│   ├── server.js                   # Entry point for Express server
│   ├── routes/
│   │   └── upload.js               # Defines API routes for document operations
│   ├── test/
│   │   └── data/
│   │       └── sample.pdf          # Example file for testing
│   ├── uploads/                    # Stores uploaded files
│
├── frontend/
│   ├── package.json                # Frontend dependencies and scripts
│   ├── public/
│   │   └── index.html              # HTML template for React app
│   ├── src/
│   │   ├── App.jsx                 # Root React component
│   │   ├── main.jsx                # Entry point for React app
│   │   ├── index.css               # Global styles
│   │   ├── Components/
│   │   │   ├── Header.jsx               # Top navigation/header bar
│   │   │   ├── FeaturesSection.jsx      # Features of DocSummary-AI
│   │   │   ├── Footer.jsx               # Displays footer
│   │   │   └── HeroSection.jsx          
│   │   │   └── MainContent.jsx          # Document Upload and Summarization
│   │   │   └── UploadFile.jsx           # Uploading 
│   │   └── axiosbase.js                 # Configured Axios instance for API requests  
│   ├── tailwind.config.js               # TailwindCSS configuration
│
├── package.json                         # Root scripts for install/build/start
├── README.md                            # Project documentation
└── .gitignore                           # Git ignore file

📌 Key Files & Folders

backend → Business logic for summarization & text extraction

backend/routes/ → API endpoints for upload & summary generation

backend/uploads/ → Uploaded files storage

frontend/src/Components/ → React UI components (upload, summary, nav)




👨‍💻 Contact / Author

Priyanshi Verma

GitHub: PriyanshiVerma-13

Email: 2k22.csai.2212134@gmail.com



© 2025 DocSummary-AI. All rights reserved.
