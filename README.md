# Chatbot Application

A chatbot application built using **React.js** for the frontend and **Express.js** for the backend. This chatbot provides a user-friendly interface similar to chatting with a person on **WhatsApp or Instagram**. It responds to general chat queries using **Together AI's Free Meta model**.

---

## Features

- **Interactive UI**: Mimics popular chat interfaces like WhatsApp and Instagram.
- **AI-Powered Responses**: Uses Together AI's **Meta AI model** to generate responses.
- **Error Handling**: If the backend server stops, the frontend remains functional and displays a fallback response: *"No response from the bot"*.
- **Seamless Recovery**: When the server is back online, normal chatbot responses resume.
- **API Integration**: Demonstrates API handling and AI model integration using an API key.

---


## Tech Stack

```json
{
  "frontend": "React.js",
  "backend": "Express.js",
  "AI_Model": "Together AI's Free Meta model"
}
```

# Installation and Setup

## Clone the repository
```
git clone https://github.com/Vijay2887/Chatbot-react.git
cd Chatbot-react
```

## Install dependencies
## For the frontend (React.js)
```
cd chatbot-react
npm install
```
# For the backend (Express.js)
```
cd chatbot-backend
npm install
```

## Set up API Key
Obtain an API key from Together AI and add it in your backend configuration file.

## Run the application
## Start the frontend
```
npm run dev
```

## Start the backend
```
npm run start
```

## Customization
The AI model in use is Meta AI, but it can be changed in the backend to any other supported model.

Modify the UI components in the frontend to enhance the chat experience.







