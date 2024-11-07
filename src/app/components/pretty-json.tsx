export default function PrettyJSON({ content }: { content: object }) {
  return (
    <div style={{ overflow: "scroll", maxWidth: "90vw" }}>
      <pre>{JSON.stringify(content, null, 2)}</pre>
    </div>
  );
}
