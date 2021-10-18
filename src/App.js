import { useState } from "react";
import { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBook from "./components/Admin/AddBook/AddBook";
import CheckOut from "./components/CheckOut/CheckOut";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageBooks from "./components/Admin/ManageBooks/ManageBooks";
import PrivateRoute from "./components/Login/PrivateRoute";
import Order from "./components/Users/Order/Order";
import UpdateBook from "./components/Admin/UpdateBook/UpdateBook";
import AddAdmin from "./components/Admin/AddAdmin/AddAdmin";

export const CartContext = createContext();
export const AdminContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [admin, setAdmin] = useState(false);

  return (
    <AdminContext.Provider value={[admin, setAdmin]}>
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
            <PrivateRoute path="/checkout">
              <Header />
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/add-book">
              <AddBook />
            </PrivateRoute>
            <PrivateRoute path="/manage-books">
              <ManageBooks />
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Order />
            </PrivateRoute>
            <PrivateRoute path="/update-book/:id">
              <UpdateBook />
            </PrivateRoute>
            <PrivateRoute path="/add-admin">
              <AddAdmin />
            </PrivateRoute>
          </Switch>
        </Router>
      </CartContext.Provider>
    </AdminContext.Provider>
  );
}

export default App;
