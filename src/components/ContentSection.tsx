import ArticleCard from "./ArticleCard";
import type { Article } from "../types";

interface ContentSectionProps {
  title: string;
  items: Article[];
  sectionId: string;
}

const ContentSection = ({ title, items, sectionId }: ContentSectionProps) => {
  return (
    <section id={sectionId} className="w-full pt-0 pb-12">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ArticleCard key={item.id} post={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
