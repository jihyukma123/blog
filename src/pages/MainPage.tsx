import Introduction from "../components/Introduction";
import ContentSection from "../components/ContentSection";
import { blogPosts } from "../data/mockData";

const MainPage = () => {
  return (
    <>
      <Introduction />
      <ContentSection title="Posts" items={blogPosts} sectionId="posts" />
    </>
  );
};

export default MainPage;
