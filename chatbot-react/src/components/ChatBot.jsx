import React, { useState } from "react";
import Header from "./Header";
import Chat from "./Chat";
import Input from "./Input";

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      message: "Hi this is chatbot. How can I help you today?",
      role: "bot",
    },
  ]);
  return (
    <div className="border-1 border-white  w-[350px] rounded-2xl flex flex-col ">
      <div className="">
        {/* chatbot header */}
        <Header />
        {/* chat history of bot and user */}
        <Chat chatHistory={chatHistory} setChatHistory={setChatHistory} />
      </div>
      {/* input by user */}
      <Input chatHistory={chatHistory} setChatHistory={setChatHistory} />
    </div>
  );
};

export default ChatBot;
