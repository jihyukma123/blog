import React from "react";
import { Link } from "react-router-dom";
import type { Article } from "../types";

interface ArticleCardProps {
  post: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  const { id, title, description, date } = post;

  return (
    <Link
      to={`/post/${id}`}
      className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 
                 bg-white dark:bg-gray-900 
                 hover:border-[slateblue] dark:hover:border-[slateblue] 
                 transition-all duration-200 
                 hover:shadow-md dark:hover:shadow-purple-900/20"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
        {description}
      </p>
      <time className="text-sm text-gray-500 dark:text-gray-500">{date}</time>
    </Link>
  );
};

export default ArticleCard;
