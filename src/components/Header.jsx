import { useSelector } from "react-redux";

function Header() {
  const totalBlogs = useSelector((state) => state.blog.length);
  return (
    <header className="flex items-center justify-between rounded-xl bg-slate-800 p-4 text-white">
      <h1 className="text-3xl font-bold">Redux Reducers Demo</h1>

      <div className="rounded-lg bg-slate-600 px-4 py-1 text-center">
        <p className="text-2xl font-bold">{totalBlogs}</p>
        <p className="text-sm text-slate-300">Total Blogs</p>
      </div>
    </header>
  );
}

export default Header;
