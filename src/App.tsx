import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />

        {/* Main Content - padding-top to account for fixed header */}
        <main className="pt-20">
          <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              Hello world!
            </h1>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
