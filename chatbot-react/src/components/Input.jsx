import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const Input = ({ chatHistory, setChatHistory }) => {
  const [userMessage, setUserMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [botMessage, setBotMessage] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // saving the user entered value into userMessage
  const handleUserInput = (event) => {
    setUserMessage((currentUserMessage) => event.target.value);
  };

  // fetching and handling the button click
  const handleClick = async () => {
    setChatHistory((currentChatHistory) => {
      return [...currentChatHistory, { message: userMessage, role: "user" }];
    });

    setUserMessage("");
    // setBotMessage("");
    setIsLoading(true);
    let response;
    let error_occured = 0;
    try {
      response = await axios.post("http://localhost:3000/chat", {
        message: userMessage,
      });
    } catch (error) {
      console.log(error);
      error_occured = 1;
    }

    // response.data && setBotMessage(response.data);

    setIsLoading(false);
    setChatHistory((currentChatHistory) => {
      return [
        ...currentChatHistory,
        {
          message: error_occured === 1 ? "No response from bot" : response.data,
          role: "bot",
        },
      ];
    });
  };

  // handling keyboard controls
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (userMessage && !isLoading) {
        handleClick();
      }
    }
  };

  return (
    <div className="w-full p-4 flex justify-between items-center ">
      <input
        placeholder={isLoading ? "Thinking..." : "Message..."}
        className="w-[80%] p-3 focus:border-none focus:outline-none bg-gray-700 rounded-3xl text-white resize-none overflow-hidden"
        value={userMessage}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onChange={(event) => handleUserInput(event)}
      ></input>
      {userMessage && !isLoading && (
        <button className="hover: cursor-pointer" onClick={handleClick}>
          <span className="material-symbols-outlined bg-purple-700 rounded-full p-2 font-bold">
            arrow_upward
          </span>
        </button>
      )}
    </div>
  );
};

export default Input;
