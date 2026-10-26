import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../features/blog/blogSlice";

function AddBlogForm() {
  const dispatch = useDispatch();

  // 1. title ke liye useState
  const [title, setTitle] = useState("");
  // 2. description ke liye useState
  const [description, setDescription] = useState("");
  // 2. category ke liye useState
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 3. dispatch(addBlog(...)) se blog add karo
    dispatch(
      addBlog({
        id: Date.now(),
        title: title,
        category: category,
        description: description,
        isFeatured: false,
      }),
    );

    // 4. Dono input fields reset karo
    setTitle("");
    setCategory("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h1 className="text-xl font-bold text-center">Add New Blog</h1>
      <label htmlFor="title" className="mb-1 block font-medium">
        Title
      </label>
      <input
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        type="text"
        placeholder="Blog title"
        id="title"
        // value aur onChange add karo
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="category" className="mb-1 block font-medium">
        Category
      </label>
      <input
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        type="text"
        placeholder="Blog category"
        id="category"
        // value aur onChange add karo
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <label htmlFor="description" className="mb-1 block font-medium">
        Description
      </label>
      <textarea
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        placeholder="Blog description"
        id="description"
        // value aur onChange add
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Add Blog
      </button>
    </form>
  );
}

export default AddBlogForm;
