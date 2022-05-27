export default function OutputResult({
  value = "",
  className,
  cols = "40",
  rows = "3",
}) {
  return (
    <textarea
      style={{ direction: "rtl" }}
      className={`${className} resize-none  py-3 px-3  bg-[#FBFAF8] text-center rounded-md p-4 mt-5`}
      cols={Math.min(
        Math.max(...value.split("\n").map((s) => s.length), cols),
        100
      )}
      rows={Math.max(value.split("\n").length, rows)}
      disabled
    >
      {value}
    </textarea>
  );
}
