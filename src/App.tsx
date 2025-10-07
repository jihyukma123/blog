import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/Header";
import Introduction from "./components/Introduction";
import ContentSection from "./components/ContentSection";
import { blogPosts } from "./data/mockData";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />

        <main className="pt-20">
          <Introduction />

          <ContentSection title="Posts" items={blogPosts} sectionId="posts" />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
