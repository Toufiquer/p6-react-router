import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import UserDetails from "./components/UserDetails/UserDetails";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/orderDetails" element={<OrderDetails></OrderDetails>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/users" element={<Users></Users>}>
          <Route path=":userID" element={<UserDetails></UserDetails>}></Route>
        </Route>
        {/* <Route path="/user/:userId" element={<UserDetails></UserDetails>}></Route> */}
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
