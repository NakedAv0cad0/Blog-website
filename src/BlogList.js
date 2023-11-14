import { useState } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  // const blogs = blogs;
  // const title = title;
  const [isPending, setIsPending] = useState(false);

  const handleClick = (id) => {
    setIsPending(true);
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/JSON" },
    }).then(() => {
      console.log("Done");
      setIsPending(false);
      document.getElementById(id).remove();
      // I can remove the way I used at the top and the added id from the
      // blogs and use the filter method but I need to add it to the
      // home file and set it to another function
      // const newBlogs = blogs.filter((blog)=> blog.id !== id)
      // setblog(newBlogs)
    });
  };

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div id={blog.id} className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
          <span>{blog.author}</span>
          {!isPending && (
            <button onClick={() => handleClick(blog.id)}>Delete</button>
          )}
          {isPending && <button disabled>Delete</button>}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
