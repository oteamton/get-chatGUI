"use client"
import React, { Key } from "react";
import styles from "./ChatHistory.module.css"
import { Chat } from "../utils/types";

interface ChatHistoryProps {
  chats: Chat[];
  setSelectedChatIndex: React.Dispatch<React.SetStateAction<number>>;
  handleChatSelection: (index: number) => void;
};

const ChatHistory: React.FC<ChatHistoryProps> = ({ chats, setSelectedChatIndex, handleChatSelection }) => {
  return (
    <div className={`min-w-1/4 h-full p-4 overflow-y-auto rounded-lg bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg ${styles.glassEffect}`}>
      {/* Chat history */}
      <div className="chatHistory flex flex-col gap-1">
        {chats.map((chat, index) => (
          <p key={index}
            className="text-center p-1 rounded-lg bg-gray-300 text-gray-700 cursor-pointer font-bold hover:bg-white hover:placeholder-opacity-80"
            onClick={() => handleChatSelection(index)}
          >{chat.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;