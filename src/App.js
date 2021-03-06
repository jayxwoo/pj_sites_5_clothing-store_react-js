import './styles/_base.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MobileContextProvider from "./contexts/MobileContext";
import MenuBtnContextProvider from "./contexts/MenuBtnContext";
import Shop from "./pages/Shop";
import Seller from "./pages/Seller";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Add from './pages/Add';
import Edit from './pages/Edit';
import CartContextProvider from './contexts/CartContext';

function App() {
  return (
    <Router>
      <MobileContextProvider>
        <MenuBtnContextProvider>
          <CartContextProvider>
            <div className="App">
              <Navbar />
              <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/shop"><Shop /></Route>
                <Route path="/seller"><Seller /></Route>
                <Route path="/edit/:id"><Edit /></Route>
                <Route path="/cart"><Cart /></Route>
                <Route path="/add"><Add /></Route>
              </Switch>
              <Footer />
            </div>
          </CartContextProvider>
        </MenuBtnContextProvider>
      </MobileContextProvider>
    </Router>
  );
}

export default App;
