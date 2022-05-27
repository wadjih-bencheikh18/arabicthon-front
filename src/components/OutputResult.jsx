export default function OutputResult({ value = "" }) {
  return (
    <textarea
      className="resize-none border-black border-2 text-center mt-5"
      cols={Math.max(...value.split("\n").map((s) => s.length))}
      rows={value.split("\n").length}
    >
      {value}
    </textarea>
  );
}
