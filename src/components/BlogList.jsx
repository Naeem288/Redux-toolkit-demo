import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";

function BlogList() {
  const blogs = useSelector((state) => state.blog);

  return (
    <section>
      {blogs.length === 0 ? (
        <p className="text-red-600">No blogs available yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </section>
  );
}

export default BlogList;
