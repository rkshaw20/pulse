import "./App.css";

import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Mockman from "mockman-js";

import Home from "./pages/Home/Home";
import ProductPage from "./pages/Product/ProductPage";
import Header from "./components/Header";
import Product from "./pages/Product/Product";
import { Login } from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import { RequireAuth } from "./components/RequireAuth";
import UserProfile from "./pages/userProfile/UserProfile";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import AddressPage from "./pages/Address/AddressPage";
import Error from "./pages/Error/Error";
import { ToastContainer } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";
import { useDataContext } from "./contexts/DataContextProvider";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const { loader } = useDataContext();
  return (
    <div className="App">
      <ToastContainer
          position='bottom-left'
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />

      {loader && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />

        <Route
          path="/userProfile"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/checkoutPage"
          element={
            <RequireAuth>
              <CheckoutPage />
            </RequireAuth>
          }
        />
        <Route
          path="/orderPage"
          element={
            <RequireAuth>
              <OrderPage />
            </RequireAuth>
          }
        />
        <Route
          path="/address"
          element={
            <RequireAuth>
              <AddressPage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
