import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../features/user/userSlice";

function UserProfile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      updateProfile({
        name: name,
        role: role,
      }),
    );
    setName("");
    setRole("");
  }

  return (
    <section className="w-full rounded-2xl bg-white p-6 shadow-md border-gray-200">
      <h2 className="mb-5 text-2xl font-bold text-center ">User Profile</h2>

      <div className="mb-5 rounded-lg bg-violet-50 p-4">
        <p className="text-gray-700">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="text-gray-700">
          <strong>Role:</strong> {user.role}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block font-medium">
            Name
          </label>
          <input
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            required
          />
        </div>

        <div>
          <label htmlFor="role" className="mb-1 block font-medium">
            Role
          </label>
          <input
            id="role"
            placeholder="Enter your role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
            required
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
        >
          Update Profile
        </button>
      </form>
    </section>
  );
}

export default UserProfile;
