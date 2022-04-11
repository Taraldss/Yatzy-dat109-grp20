import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Yo</h1>
      <Link to="/game/1">Check game</Link>
    </div>
  );
}
