import "./App.css";
import { Main } from "./sections/Main";
import { Navbar } from "./sections/Navbar";
import AnalysePoem from "./components/Functional/AnalysePoem";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChoiceMain } from "./sections/ChoiceMain";
import { ChoiceTa2lif } from "./sections/ChoiceTa2lif";
import AnalysePoemFull from "./components/Functional/AnalysePoemFull";
function App() {
  return (
    <Router>
      <div className="App bg-[#E4D3C1] h-screen text-right">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/create-analyse">
            <ChoiceMain />
          </Route>
          <Route path="/create">
            <ChoiceTa2lif />
          </Route>
          <Route path="/analyse">
            <div className="h-screen">
              <AnalysePoem />
            </div>
          </Route>
          <Route path="/analyseFull">
            <div className="h-screen pt-20">
              <AnalysePoemFull />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
