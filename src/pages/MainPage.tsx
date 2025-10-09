import { useEffect, useState } from "react";

import { loadPosts } from "../utils/postLoader";
import type { Article } from "../types";

import Introduction from "../components/Introduction";
import ContentSection from "../components/ContentSection";

const MainPage = () => {
  const [blogPosts, setBlogPosts] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await loadPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Failed to load posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-12 md:py-20">
        <p className="text-center text-gray-500 dark:text-gray-400">
          Loading posts...
        </p>
      </div>
    );
  }

  return (
    <>
      <Introduction />
      <ContentSection title="Posts" items={blogPosts} sectionId="posts" />
    </>
  );
};

export default MainPage;
