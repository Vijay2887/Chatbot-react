import React from "react";

const Header = () => {
  return (
    <div className="bg-purple-700 rounded-t-2xl px-2 py-3 flex justify-start items-center gap-2">
      <span className="material-symbols-outlined border-1 border-white rounded-full text-purple-700 bg-white p-[2px]">
        smart_toy
      </span>
      <span className="font-bold text-2xl">Chatbot</span>
    </div>
  );
};

export default Header;
