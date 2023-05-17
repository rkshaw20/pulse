import "./App.css";

import { Routes ,Route } from "react-router-dom";
// import "./App.css";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/Product/ProductPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productPage" element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
