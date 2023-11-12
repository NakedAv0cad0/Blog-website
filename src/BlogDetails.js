import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    isPending,
    data: blog,
    error,
  } = useFetch(`http://localhost:4321/blogs/${id}`);

  return (
    <div className="blog-details">
      {isPending && <p>Loading...</p>}
      {error && <h3>{error}</h3>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
