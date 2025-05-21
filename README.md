# XioncoAI Chatbot

A modern, responsive AI chatbot for Xionco Furniture with a clean and attractive interface similar to ChatGPT/Claude.

## Features

- Modern, responsive UI with dark/light mode
- Real-time AI-powered chat functionality
- Typing indicators
- Message history with timestamps
- Integration with OpenRouter API

## Getting Started

https://openrouter.ai/deepseek/deepseek-chat-v3-0324:free

### Prerequisites

- Node.js 16+
- NPM or Yarn

### Installation

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd chatbot-ai-react
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables

   ```bash
   cp .env.example .env
   ```

4. Add your OpenRouter API key to the `.env` file

   ```
   VITE_OPENROUTER_API_KEY=your_openrouter_api_key
   ```

5. Start development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready to be deployed.

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS 4
- Vite 6
- Axios for API communication

## License

This project is proprietary and confidential.
© Xionco Furniture. All Rights Reserved.
