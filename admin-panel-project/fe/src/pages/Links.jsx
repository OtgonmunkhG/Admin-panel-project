import { Link, LinkText } from "react-router-dom";

export function Home() {
  return (
    <Link to={"/home"}>
      <LinkText>Home</LinkText>
    </Link>
  );
}
export function Users() {
  return (
    <Link to={"/users"}>
      <LinkText>Users</LinkText>
    </Link>
  );
}
