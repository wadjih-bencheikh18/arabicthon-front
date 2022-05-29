export default function OutputResult({
  value = "",
  className,
  minWidth = "40",
  maxWidth = "100",
  minHeight = "3",
  maxHeight = "50",
  title = "الشعر",
}) {  
  return (
    <div className="flex items- justify-center mt-5 gap-3">
      <textarea
        style={{ direction: "rtl" }}
        className={`${className} text-gray-600 text-xl resize-none text-center bg-[#FBFAF8] min-w-20  rounded-md p-3`}
        cols={Math.min(
          Math.max(...value.split("\n").map((s) => s.length), minWidth),
          maxWidth
        )}
        rows={Math.min(
          Math.max(value.split("\n").length, minHeight),
          maxHeight
        )}
        disabled
        value={value}
      ></textarea>
      <h3 className="text-2xl pt-2 text-[#A58453]">
        {title}
      </h3>
    </div>
  );
}
