import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import ChartDetails from "./components/ChartDetails/ChartDetails";
import ChartsContainer from "./components/ChartsContainer/ChartsContainer";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import UserDetails from "./components/UserDetails/UserDetails";
import Users from "./components/Users/Users";
export const DataContextAPI = createContext("Data from create");
let value = "Data From App";
function App() {
  return (
    <div className="App">
      <DataContextAPI.Provider value={value}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/charts" element={<ChartsContainer></ChartsContainer>}>
            <Route path=":chartsID" element={<ChartDetails></ChartDetails>}></Route>
          </Route>
          <Route path="/orderDetails" element={<OrderDetails></OrderDetails>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/users" element={<Users></Users>}>
            <Route path=":userID" element={<UserDetails></UserDetails>}></Route>
          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </DataContextAPI.Provider>
    </div>
  );
}

export default App;
