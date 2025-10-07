import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold underline text-blue-500 dark:text-blue-400">
            Hello world!
          </h1>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
