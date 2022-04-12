export default function Player({
  name,
  setName,
}: {
  name: string;
  setName: any;
}) {
  return (
    <div className="margin-right">
      <input
        type="text"
        placeholder="Name?"
        onChange={(event) => setName(event.target.value)}
        value={name}
        className="player"
      />
    </div>
  );
}
