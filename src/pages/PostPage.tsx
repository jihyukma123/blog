import { useParams } from "react-router-dom";
import { blogPosts } from "../data/mockData";

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 md:py-20">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">{post.date}</p>
      <div className="prose dark:prose-invert max-w-none">
        <p>{post.description}</p>
        {/* 실제 포스트 내용이 들어갈 자리 */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla.
        </p>
      </div>
    </div>
  );
};

export default PostPage;
