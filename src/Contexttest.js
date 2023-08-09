import { useContext } from "react";
import UserContext from "./UserContext";

const Contexttest = () => {
  const user = useContext(UserContext);

  return <div>From Context : {user}</div>;
};

export default Contexttest;
