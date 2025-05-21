import apiClient from "../lib/axios";
import type { Message, MessageRole } from "../types";

interface ApiMessage {
  role: MessageRole;
  content: string;
}

interface ApiResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

export const sendChatMessage = async (messages: Message[]): Promise<string> => {
  try {
    const apiMessages: ApiMessage[] = [
      {
        role: "system",
        content:
          "Anda adalah XioncoAI, asisten yang sangat membantu untuk Xionco Furniture. Anda memberikan informasi tentang produk furnitur, bahan, tren desain, dan membantu pelanggan dengan pertanyaan mereka yang terkait dengan perabotan rumah.",
      },
      ...messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    ];

    // For development without API key
    if (!import.meta.env.VITE_OPENROUTER_API_KEY) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return "I'm a mock response from XioncoAI. To get real AI responses, please set your OpenRouter API key in the .env file.";
    }

    const response = await apiClient.post<ApiResponse>("/chat/completions", {
      model: "deepseek/deepseek-chat-v3-0324:free",
      messages: apiMessages,
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling AI service:", error);
    throw new Error("Failed to get response from AI service");
  }
};
