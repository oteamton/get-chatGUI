"use client"
import React, { use, useState } from "react";
import ChatDisplay from "./components/ChatDisplay";
import ChatInput from "./components/ChatInput";
import ChatHistory from "./components/ChatHistory";
import styles from "./components/ChatHistory.module.css"
import { Message, Chat } from "./utils/types";


// Mock data
const chatData: Chat[] = [
  {
    id: 1,
    title: "Request for developing...",
    messages: [
      { user: "Me", text: "Hello there" },
      { user: "You", text: "Hi there" },
    ],
  },
  {
    id: 2,
    title: "Something",
    messages: [
      { user: "Me", text: "Good to see you" },
      { user: "You", text: "Me too, bruh" },
    ],
  },
  {
    id: 3,
    title: "Act like a pro",
    messages: [
      { user: "Me", text: "How can I help you?" },
      { user: "You", text: "I need help with my project" },
    ],
  },
];

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectdChatIndex, setSelectedChatIndex] = useState<number>(0);
  const [currentChat, setCurrentChat] = useState<Chat | null>(chatData[0]);
  const [chats, setChats] = useState<Chat[]>(chatData);

  const handleChatSelection = (index: number) => {
    setSelectedChatIndex(index);
    const selectedChat = chats[index];
    setCurrentChat(selectedChat);
  };

  const handleNewChat = () => {
    const newChat: Chat = {
      id: chats.length + 1,
      title: 'New Untitled',
      messages: [],
    }
    setCurrentChat(newChat);
    setChats([...chats, newChat]);
    setSelectedChatIndex(chats.length);
    setInputValue('');
  };

  const handleSendMessage = () => {
    if (currentChat && inputValue.trim()) {
      const newMessage: Message = {
        user: 'User',
        text: inputValue.trim(),
      };
      const updatedChat: Chat = {
        ...currentChat,
        messages: [...currentChat.messages, newMessage],
      };
      const updatedChats = chats.map(chat => chat.id === updatedChat.id ? updatedChat : chat);

      setCurrentChat(updatedChat);
      setChats(updatedChats);
      setInputValue('');

      setTimeout(() => {
        const botMessage: Message = {
          user: 'Bot',
          text: 'Oops something wrong! I will get back to you shortly.',
        };
        const updatedChatWithBotMessage: Chat = {
          ...updatedChat,
          messages: [...updatedChat.messages, botMessage],
        }
        setCurrentChat(updatedChatWithBotMessage);
        setChats(updatedChats.map(chat => chat.id === updatedChatWithBotMessage.id ? updatedChatWithBotMessage : chat));

      }, 1000);
    }
  };

  return (
    <main>
      <h1 className="text-2xl text-center font-bold text-blue-500 pt-8 flex justify-center items-center relative">
        <span className="relative z-10 mb-2">Chat</span>
        <span className="absolute right-0 bottom-1 h-1 w-1/6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-blue-600"></span>
      </h1>
      {/* Chat and History */}
      <div className="flex min-h-screen flex-row gap-1 justify-center items-stretch px-10 py-2">
        <div className="flex flex-col gap-1">
          <button onClick={handleNewChat} className={`w-fit self-end ${styles.glassEffect} text-white font-bold py-2 px-4 rounded-lg`}>
            + New Chat
          </button>
          <ChatHistory chats={chats} setSelectedChatIndex={setSelectedChatIndex} handleChatSelection={handleChatSelection} />
        </div>
        <div className="w-3/4 flex flex-col gap-1 justify-center">
          {currentChat && (
            <>
              <h1 className={`text-white font-bold text-center ${styles.glassEffect} py-2 px-4 rounded-lg`}>
                {currentChat.title}
              </h1>
              <ChatDisplay messages={currentChat.messages} />
              <ChatInput
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onSendChat={handleSendMessage}
              />
            </>
          )}
        </div>
      </div>
    </main >
  );
};

export default Home;