import "./App.css";
import Tachkil from "./components/Tachkil";
import { Navbar } from "./sections/Navbar";

function App() {
  return (
    <div className="App bg-[#E4D3C1] h-screen">
      <div>
        <Navbar />
      </div>
      <div className="pt-56">
        <Tachkil />
      </div>
    </div>
  );
}

export default App;
