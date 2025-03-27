import React, { useEffect, useRef } from "react";
import clsx from "clsx";

const Chat = ({ chatHistory }) => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div
      ref={chatContainerRef}
      className="h-[70vh] overflow-scroll chat-container mt-1 rounded-b-xl"
    >
      {chatHistory.map((chat, index) => (
        <div
          key={index}
          className={clsx(
            chat.role === "bot"
              ? "bg-amber-50 w-[90%] text-black rounded-t-2xl border-2 mx-3 border-purple-700 rounded-br-2xl p-2"
              : "",
            "mt-2"
          )}
        >
          {chat.role === "bot" ? (
            <div className="flex items-end gap-2">
              <span className="material-symbols-outlined border-1 border-purple-700 rounded-full text-white bg-purple-700 p-[2px]">
                smart_toy
              </span>
              <span>{chat.message}</span>
            </div>
          ) : (
            <div className=" mt-2 flex justify-end">
              <div className="inline bg-purple-700 p-2 rounded-t-2xl  max-w-[85%] rounded-bl-2xl">
                <span>{chat.message}</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Chat;
