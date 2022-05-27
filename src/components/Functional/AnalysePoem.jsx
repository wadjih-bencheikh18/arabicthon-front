import GenImage from "./GenImage";
import OutputResult from "./OutputResult";

export default function AnalysePoem() {
  return (
    <div className="h-screen flex items-center">
      <GenImage />
      <OutputResult
        value={`قِف بِالمَنازِلِ إِن شَجَتكَ رُبوعُها
قِف بِالمَنازِلِ إِن شَجَتكَ رُبوعُها
قِف بِالمَنازِلِ إِن شَجَتكَ رُبوعُها
قِف بِالمَنازِلِ إِن شَجَتكَ رُبوعُها
قِف بِالمَنازِلِ إِن شَجَتكَ رُبوعُها
قِف بِالمَنازِلِ إِن شَجَتكَ رُبوعُها
قِف بِالمَنازِلِ إِن شَجَتكَ رُبوعُها`}
      />
    </div>
  );
}
