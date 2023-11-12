import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  // const blogs = blogs;
  // const title = title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
          <span>{blog.author}</span>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
