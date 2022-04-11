import { useState } from "react";
import { Link } from "remix";

export default function index() {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <div>
      <form method="Post" action="">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password.."
          onChange={(event) => setPassword(event.target.value)}
        />
        <div>
          <input type="submit" value={"logg inn"} />
          <Link to={"/register"}>Register</Link>
        </div>
      </form>
    </div>
  );
}
