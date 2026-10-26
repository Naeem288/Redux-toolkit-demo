import { UserContext } from "./UserContext";

export function UserProvider({ children }) {
  const user = {
    name: "Asim",
    role: "Admin",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}