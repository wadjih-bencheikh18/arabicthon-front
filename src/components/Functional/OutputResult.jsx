export default function OutputResult({
  value = "",
  className,
  cols = "40",
  rows = "3",
}) {
  return (
    <textarea
      className={`${className} resize-none bg-[#FBFAF8] rounded-3xl p-4 mt-5`}
      cols={Math.max(...value.split("\n").map((s) => s.length), cols)}
      rows={Math.max(value.split("\n").length, rows)}
      disabled
    >
      {value}
    </textarea>
  );
}
