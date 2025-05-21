import { useState, useEffect } from 'react';
import ChatContainer from './components/ChatContainer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for user preference in localStorage or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl px-4 py-6">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mr-3">
              <span className="text-white font-bold text-xl">X</span>
            </div>
            <h1 className="text-2xl font-bold">XioncoAI</h1>
          </div>
          <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
        </header>

        <main className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <ChatContainer />
        </main>

        <footer className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Xionco Furniture • AI-powered chat assistant</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
