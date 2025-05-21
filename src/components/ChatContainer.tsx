import { useState } from 'react';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';
import { sendChatMessage } from '../services/chatService';
import type { Message } from '../types';

const ChatContainer = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSendMessage = async (content: string) => {
        // Create user message
        const userMessage: Message = {
            id: `user-${Date.now()}`,
            content,
            role: 'user',
            timestamp: new Date().toISOString(),
        };

        // Add user message to chat
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setLoading(true);

        try {
            // Send message to AI service
            const response = await sendChatMessage([...messages, userMessage]);

            // Create AI response message
            const assistantMessage: Message = {
                id: `assistant-${Date.now()}`,
                content: response,
                role: 'assistant',
                timestamp: new Date().toISOString(),
            };

            // Add AI response to chat
            setMessages(prevMessages => [...prevMessages, assistantMessage]);
        } catch (error) {
            // Add error message if API call fails
            const errorMessage: Message = {
                id: `error-${Date.now()}`,
                content: 'Sorry, I encountered an error. Please try again.',
                role: 'assistant',
                timestamp: new Date().toISOString(),
            };

            setMessages(prevMessages => [...prevMessages, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-180px)]">
            <ChatHistory messages={messages} loading={loading} />
            <ChatInput onSendMessage={handleSendMessage} disabled={loading} />
        </div>
    );
};

export default ChatContainer;
