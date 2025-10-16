# 🎯 Next.js OpenAI Job Interview Q&A App

Welcome to the **Next.js OpenAI Job Interview Q&A Application** — an interactive web app designed to simulate realistic IT and AI-related job interview sessions. It uses **OpenAI’s GPT API** to generate dynamic questions and answers in real time.

---

## 🚀 Features

- 💬 Interactive job interview Q&A powered by OpenAI API  
- ⚡ Built with **Next.js 13** for high performance and flexibility  
- 🎨 Styled with **Bootstrap 5**  
- 🔐 Environment configuration with **dotenv**  
- 🧠 Customizable prompts and logic for interview modes  

---

## 🛠️ Installation

### Prerequisites
- **Node.js 22** or newer  
- **npm** (comes with Node.js)

### Steps

1. **Clone this repository**
   ```bash
   git clone https://github.com/arTesting/njsquanda.git
   cd nextjs-openai-job-interview


Install dependencies

npm install


Set up environment variables
Create a .env file in the root directory and add your OpenAI API key:

OPENAI_API_KEY=your_openai_api_key_here


Run the development server

npm run dev


Open http://localhost:3000
 in your browser.

📦 Dependencies
Package	Version	Description
bootstrap
	^5.3.8	CSS framework for responsive design
dotenv
	^16.0.3	Loads environment variables
next
	^13.3.0	React framework for server-side rendering
openai
	^3.2.1	OpenAI API SDK for Node.js
🧩 Project Structure
/pages
  ├── api/
  │   └── openai.js       # API route for OpenAI requests
  ├── index.js             # Main frontend page
/prompts/
  └── promptUtils.js       # Helper functions for system prompts
/public/
  └── assets/              # Static images, icons, etc.

💡 Usage

Edit system prompts in /prompts/promptUtils.js to customize your interview behavior.

The /api/openai.js endpoint handles chat communication with the OpenAI API.

You can easily extend the logic to include different roles, difficulty levels, or interview topics.

🤝 Contributing

Contributions are welcome!
If you’d like to improve or extend the project, feel free to fork the repo and submit a pull request.

📜 License

This project is released under the MIT License.