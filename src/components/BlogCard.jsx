import { useDispatch } from "react-redux";
import { deleteBlog, toggleFeatured } from "../features/blog/blogSlice";

function BlogCard({ blog }) {
  const dispatch = useDispatch();

  return (
    <article className="rounded-xl bg-white p-4 shadow">
      <h2 className="text-xl font-semibold">{blog.title}</h2>
      <p className=" font-semibold">Category: {blog.category}</p>
      <p className="mt-2 text-gray-600">{blog.description}</p>

      <span
        className={`mt-3 inline-block rounded-full px-3 py-1 text-sm font-medium ${
          blog.isFeatured
            ? "bg-yellow-100 text-yellow-800"
            : "bg-gray-100 text-gray-600"
        }`}
      >
        {blog.isFeatured ? "⭐ Featured" : "Normal"}
      </span>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => dispatch(toggleFeatured(blog.id))}
          className="rounded bg-yellow-400 px-3 py-2 text-white"
        >
          {blog.isFeatured ? "Remove Featured" : "Make Featured"}
        </button>

        <button
          onClick={() => dispatch(deleteBlog(blog.id))}
          className="rounded bg-red-600 px-3 py-2 text-white"
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default BlogCard;
