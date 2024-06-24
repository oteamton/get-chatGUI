"use client"
import React from "react";
import styles from "./ChatHistory.module.css"
import { Message } from "../utils/types";

interface ChatDisplayProps{
    messages: Message[];
}

const ChatDisplay: React.FC<ChatDisplayProps> = ({ messages }) => {
  console.log('Chat Display rendered with messages:', messages);
    return (
        <div className={`min-h-screen h-full p-2 overflow-y-auto rounded-lg bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg ${styles.glassEffect}`}>
            {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.user === "Me"
            ? "bg-blue-200 text-blue-800 px-2 py-1 rounded-r-[5px] rounded-l-[5px]"
            : message.user === "Bot"
              ? "bg-white text-red-800 border border-red-600 px-2 py-1 rounded-r-[5px] rounded-l-[5px]"
              : "bg-gray-200 text-gray-800 px-2 py-1 rounded-r-[5px] rounded-l-[5px]"
          }`}>
            <strong className="mr-1">{message.user}:</strong> {message.text}
          </div>
        ))}
        </div>
    );
};

export default ChatDisplay;