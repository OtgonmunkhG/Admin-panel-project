import { createContext, useState } from "react";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const URL = "http://localhost:8080/users";
  const [users, setUsers] = useState([]);
  return (
    <UserContext.Provider value={{ users, setUsers, URL }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserContextProvider };
