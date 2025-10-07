import React from "react";

interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  date,
  link,
}) => {
  return (
    <a
      href={link}
      className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 
                 bg-white dark:bg-gray-900 
                 hover:border-blue-500 dark:hover:border-blue-400 
                 transition-all duration-200 
                 hover:shadow-md dark:hover:shadow-blue-900/20"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
        {description}
      </p>
      <time className="text-sm text-gray-500 dark:text-gray-500">{date}</time>
    </a>
  );
};

export default ArticleCard;
