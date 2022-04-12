export default function Player({
  name,
  setName,
}: {
  name: string;
  setName: any;
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
    </div>
  );
}
