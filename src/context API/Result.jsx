import { UserContext } from "./UserContext";
import { useContext } from "react";

function Result() {
  const { name, role } = useContext(UserContext);
  return (
    <div>
      <h1>Employee Name: {name}</h1>
      <p>Role: {role}</p>
    </div>
  );
}

export default Result;
