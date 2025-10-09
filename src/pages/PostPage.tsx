import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import { loadPost } from "../utils/postLoader";
import type { Article } from "../types";

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!id) return;

      try {
        const loadedPost = await loadPost(id);
        setPost(loadedPost);
      } catch (error) {
        console.error("Failed to load post:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-12 md:py-20">
        <p className="text-center text-gray-500 dark:text-gray-400">
          Loading post...
        </p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-8 py-12 md:py-20">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-gray-500 dark:text-gray-400">
          The post you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-8 py-12 md:py-20">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 dark:text-gray-400">{post.date}</p>
        </header>
        <div className="markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content || ""}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default PostPage;
