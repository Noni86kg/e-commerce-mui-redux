import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Error404 from "./components/error/Error404";
import Footer from "./components/footer/Footer";
import Category from "./components/category/Category";
import Details from "./components/details/Details";
import Cart from "./components/cart/Cart";
import LogIn from "./components/logIn/LogIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all-products" element={<Category path={""} />} />
        <Route
          path="/electronics"
          element={<Category path={"/category/electronics"} />}
        />
        <Route
          path="/jewelery"
          element={<Category path={"/category/jewelery"} />}
        />
        <Route
          path="/men's-clothing"
          element={<Category path={"/category/men's%20clothing"} />}
        />
        <Route
          path="/women's-clothing"
          element={<Category path={"/category/women's%20clothing"} />}
        />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
