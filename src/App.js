import "./App.css";
import { Main } from "./sections/Main";
import { Navbar } from "./sections/Navbar";
import AnalysePoem from "./components/Functional/AnalysePoem";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChoiceMain } from "./sections/ChoiceMain";
import { ChoiceTa2lif } from "./sections/ChoiceTa2lif";
import AnalysePoemFull from "./components/Functional/AnalysePoemFull";
import { ChoiceTa7lil } from "./sections/ChoiceTa7lil";
import LastWord from "./components/Functional/LastWord";
import Analyse from "./components/Functional/Analyse";
import Subject from "./components/Functional/Subject";
import Rawi from "./components/Functional/Rawi";
import AddTachkil from "./components/Functional/AddTachkil";
import Aroud from "./components/Functional/Aroud";
import Ta9ti3 from "./components/Functional/Ta9ti3";
import Ba7r from "./components/Functional/Ba7r";
import Taf3ilat from "./components/Functional/Taf3ilat";
import Ba7rDounTachkil from "./components/Functional/Ba7rDounTachkil";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <Router>
      <div className="App bg-[#E4D3C1] text-right">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/create-analyse">
            <ChoiceMain />
          </Route>
          <Route exact path="/create">
            <ChoiceTa2lif />
          </Route>
          <Route exact path="/analyse">
            <ChoiceTa7lil />
          </Route>

          <Route path="/analyseFull">
            <div className="min-h-screen pt-20">
              <AnalysePoemFull />
            </div>
          </Route>

          {/* ta2lif */}
          <Route path="/soura">
            <AnalysePoem />
          </Route>
          <Route path="/ikmalKalima">
            <LastWord />
          </Route>
          <Route path="/mawdo3">
            <Subject />
          </Route>
          <Route path="/rawi">
            <Rawi />
          </Route>

          {/* ta7lil */}
          <Route path="/tachkil">
            <AddTachkil />
          </Route>
          <Route path="/kitaba3arodya">
            <Aroud />
          </Route>
          <Route path="/ta9ti3">
            <Ta9ti3 />
          </Route>
          <Route path="/taf3ilat">
            <Taf3ilat />
          </Route>
          <Route path="/ba7rTachkil">
            <Ba7r />
          </Route>
          <Route path="/ba7rDounTachkil">
            <Ba7rDounTachkil />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/test">
            <Analyse />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
