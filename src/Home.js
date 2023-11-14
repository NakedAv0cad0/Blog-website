import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    isPending,
    error,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isPending && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {error && <h3>{error}</h3>}
    </div>
  );
};

export default Home;
