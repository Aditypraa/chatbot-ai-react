export type MessageRole = "user" | "assistant" | "system";

export interface Message {
  id: string;
  content: string;
  role: MessageRole;
  timestamp: string;
}

export interface ChatHistoryProps {
  messages: Message[];
  loading: boolean;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled: boolean;
}

export interface ChatMessageProps {
  message: Message;
}

export interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}
