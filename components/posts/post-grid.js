import PostItem from "./post-item";
import styles from "./post-grid.module.css";

const PostGrid = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.id} />
      ))}
    </ul>
  );
};

export default PostGrid;
