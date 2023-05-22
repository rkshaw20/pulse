import "./App.css";

import { Routes ,Route } from "react-router-dom";
// import "./App.css";
import Mockman from "mockman-js";

import Home from "./pages/Home/Home";
import ProductPage from "./pages/Product/ProductPage";
import Header from "./components/Header";
import Product from "./pages/Product/Product";
import {Login} from './pages/Auth/Login'
import SignUp from "./pages/Auth/SignUp";
import UserPage from "./pages/userProfile/userPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productPage" element={<ProductPage/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signUp" element ={<SignUp/>}/>
        <Route path="/mockman" element={<Mockman/>} />

        <Route path="userProfile" element={<UserPage/>} />
      </Routes>
    </div>
  );
}

export default App;
