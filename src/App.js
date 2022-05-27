import "./App.css";
import { Main } from "./sections/Main";
import { Navbar } from "./sections/Navbar";
import AnalysePoem from "./components/AnalysePoem";
function App() {
  return (
    <div className="App bg-[#E4D3C1] h-screen text-right">
      <div>
        <Navbar />
      </div>
      <div className="">
        <Main />
      </div>
      <div className="h-screen">
        <AnalysePoem />
      </div>
    </div>
  );
}

export default App;
