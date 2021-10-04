import { useState } from "react";
import { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBook from "./components/Admin/AddBook/AddBook";
import CheckOut from "./components/CheckOut/CheckOut";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>
          <Route path="/add-book">
            <AddBook />
          </Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
