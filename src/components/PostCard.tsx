import type { BlogPost } from "../data/posts";

type PostCardProps = {
  post: BlogPost;
  onRead: (post: BlogPost) => void;
};

export default function PostCard({ post, onRead }: PostCardProps) {
  return (
    <article className="post">
      <div className="post-meta">
        <span className="tag">{post.category}</span>
        <span>{post.readingTime} dk okuma</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
      <button className="read-more" type="button" onClick={() => onRead(post)}>
        Yazıyı oku <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}
