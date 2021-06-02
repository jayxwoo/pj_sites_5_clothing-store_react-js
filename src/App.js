import './styles/_base.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MobileContextProvider from "./contexts/MobileContext";
import MenuBtnContextProvider from "./contexts/MenuBtnContext";

function App() {

  return (
    <Router>
      <MobileContextProvider>
        <MenuBtnContextProvider>
          <div className="App">
            <Switch>
              <Route exact path="/"><Home /></Route>
            </Switch>
          </div>
        </MenuBtnContextProvider>
      </MobileContextProvider>
    </Router>
  );
}

export default App;
