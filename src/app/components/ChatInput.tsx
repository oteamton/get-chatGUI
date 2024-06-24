"use client"
import React, { useState } from "react";
import styles from './ChatInput.module.css'

interface InputBoxProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onSendChat: () => void;
}

const ChatInput: React.FC<InputBoxProps> = ({ value, onChange, onSendChat }) => {
    const [inputValue, setInputValue] = useState('');
    console.log('Chat Input rendered with value:', value);

    return (
        <div className={`sticky bottom-0 flex flex-col p-2 pt-0 rounded-lg shadow-lg ${styles.glassEffect}`}>
            {/* <button className={` ${styles.glassEffectBtn}`}>Check</button> */}
            <button className="min-w-8 min-h-8 h-fit w-fit ml-5 bg-green-500 hover:bg-green-600 m-2 mb-0 p-1 font-bold rounded-[50%] transition-colors duration-300">⬆</button>
            <div className={`flex items-center gap-2 p-2 rounded-lg`}>
                <textarea
                    value={value}
                    onChange={onChange}
                    // className="flex-grow outline-none resize-none bg-gray-700 text-white rounded-lg p-2"
                    className="flex-grow outline-none resize-none bg-gray-700 text-gray-300 rounded-lg p-2"
                    placeholder="Type your message..."
                />
                <button
                    onClick={onSendChat}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default ChatInput;