import type { Article, PostMetadata } from "../types";

// Vite의 import.meta.glob을 사용하여 모든 파일을 가져옴
const contentFiles = import.meta.glob("/posts/*/content.md", {
  query: "?raw",
  import: "default",
});

const metadataFiles = import.meta.glob("/posts/*/metadata.json", {
  import: "default",
});

export async function loadPosts(): Promise<Article[]> {
  const posts: Article[] = [];

  // 모든 metadata 파일을 순회
  for (const metadataPath in metadataFiles) {
    try {
      // path에서 id 추출 (예: /posts/example-post-1/metadata.json -> example-post-1)
      const id = metadataPath.split("/")[2];

      // metadata 로드
      const loadMetadata = metadataFiles[metadataPath];
      const metadata = (await loadMetadata()) as PostMetadata;

      // content 로드
      const contentPath = `/posts/${id}/content.md`;
      const loadContent = contentFiles[contentPath];

      if (!loadContent) {
        console.warn(`Content file not found for post: ${id}`);
        continue;
      }

      const content = (await loadContent()) as string;

      posts.push({
        id,
        title: metadata.title,
        description: metadata.description,
        date: metadata.date,
        link: `/post/${id}`,
        content,
      });
    } catch (error) {
      console.error(`Failed to load post from ${metadataPath}:`, error);
    }
  }

  // 날짜순 정렬 (최신순)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function loadPost(id: string): Promise<Article | null> {
  try {
    const metadataPath = `/posts/${id}/metadata.json`;
    const contentPath = `/posts/${id}/content.md`;

    const loadMetadata = metadataFiles[metadataPath];
    const loadContent = contentFiles[contentPath];

    if (!loadMetadata || !loadContent) {
      return null;
    }

    const metadata = (await loadMetadata()) as PostMetadata;
    const content = (await loadContent()) as string;

    return {
      id,
      title: metadata.title,
      description: metadata.description,
      date: metadata.date,
      link: `/post/${id}`,
      content,
    };
  } catch (error) {
    console.error(`Failed to load post: ${id}`, error);
    return null;
  }
}
