import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const [isDeleating, setIsDeleating] = useState(false);
  const history = useHistory();
  const {
    isPending,
    data: blog,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleClick = (id) => {
    setIsDeleating(true);
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/JSON" },
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <p>Loading...</p>}
      {error && <h3>{error}</h3>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          {!isDeleating && (
            <button onClick={() => handleClick(blog.id)}>Delete</button>
          )}
          {isDeleating && <button disabled>Delete</button>}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
