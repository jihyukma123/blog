import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";

import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

import { Header } from "./components/Header";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
