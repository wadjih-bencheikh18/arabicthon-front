import "./App.css";
import Tachkil from "./components/Tachkil";
import { Main } from "./sections/Main";
import { Navbar } from "./sections/Navbar";

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
        <Tachkil />
      </div>
    </div>
  );
}

export default App;
