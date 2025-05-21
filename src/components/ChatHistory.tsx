import { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import type { ChatHistoryProps } from '../types';

const ChatHistory = ({ messages, loading }: ChatHistoryProps) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    return (
        <div className="flex-1 overflow-y-auto px-4">
            {messages.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="text-center">
                        <h3 className="text-xl font-medium mb-2">Welcome to XioncoAI</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Your furniture assistant ready to help you with any questions.
                        </p>
                    </div>
                </div>
            ) : (
                messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                ))
            )}

            {loading && (
                <div className="flex items-start my-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mr-3">
                        <span className="text-white text-sm font-semibold">X</span>
                    </div>
                    <div className="typing-animation p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatHistory;
