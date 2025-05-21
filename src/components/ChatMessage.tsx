import type { ChatMessageProps } from "../types";

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';
  const formattedTime = new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={`flex items-start gap-3 my-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-sm font-semibold">X</span>
        </div>
      )}

      <div className={`px-4 py-3 rounded-lg max-w-[80%] ${isUser
        ? 'bg-blue-600 text-white'
        : 'bg-gray-100 dark:bg-gray-800'
        }`}>
        <p className="whitespace-pre-wrap">{message.content}</p>
        <div className={`text-xs mt-1 text-right ${isUser ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'
          }`}>
          {formattedTime}
        </div>
      </div>

      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
          <span className="text-gray-700 dark:text-gray-200 text-sm font-semibold">U</span>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
