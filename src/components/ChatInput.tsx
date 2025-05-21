import { useState, type FormEvent, type KeyboardEvent } from "react";
import type { ChatInputProps } from "../types";

const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (message.trim() && !disabled) {
            onSendMessage(message.trim());
            setMessage('');
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative mt-4">
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message XioncoAI..."
                disabled={disabled}
                rows={2}
                className="w-full py-3 px-4 pr-16 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 resize-none"
            />
            <button
                type="submit"
                disabled={!message.trim() || disabled}
                className="absolute right-3 bottom-3 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400 dark:disabled:bg-blue-900 disabled:cursor-not-allowed transition-colors"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
            </button>
        </form>
    );
};

export default ChatInput;
