import './styles/_base.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MobileContextProvider from "./contexts/MobileContext";
import MenuBtnContextProvider from "./contexts/MenuBtnContext";
import Shop from "./pages/Shop";
import Seller from "./pages/Seller";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <MobileContextProvider>
        <MenuBtnContextProvider>
          <div className="App">
              <Navbar />
              <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/shop"><Shop /></Route>
                <Route path="/seller"><Seller /></Route>
                <Route path="/cart"><Cart /></Route>
              </Switch>
          </div>
        </MenuBtnContextProvider>
      </MobileContextProvider>
    </Router>
  );
}

export default App;
