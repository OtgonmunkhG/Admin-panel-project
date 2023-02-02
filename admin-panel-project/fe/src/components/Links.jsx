import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";

export function Profile() {
  return (
    <Link to={"/profile"}>
      <LinkText primary={"Profile"}></LinkText>
    </Link>
  );
}
export function Users() {
  return (
    <Link to={"/users"}>
      <ListItemText primary={"Users"} />
    </Link>
  );
}
export { Profile, Users };
