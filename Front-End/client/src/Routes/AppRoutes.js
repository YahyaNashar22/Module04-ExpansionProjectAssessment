import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../pages/Dashboard/Dashboard.js";
import Product from "../pages/Product/Product.js";
import Products from "../pages/Products/Products.js";
import Signin from "../pages/Signin/Signin.js";
import Signup from "../pages/Signup/Signup.js";
import Home from "../pages/Home/Home.js";

import LayoutWithHeaderFooter from "./LayoutWithHeaderFooter.js";
import LayoutWithoutHeaderFooter from "./LayoutWithoutHeaderFooter.js";

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LayoutWithHeaderFooter>
                <Home />
              </LayoutWithHeaderFooter>
            }
          />
          <Route
            path="/product"
            element={
              <LayoutWithHeaderFooter>
                <Product />
              </LayoutWithHeaderFooter>
            }
          />
          <Route
            path="/products"
            element={
              <LayoutWithHeaderFooter>
                <Products />
              </LayoutWithHeaderFooter>
            }
          />
          <Route
            path="/dashboard"
            element={
              <LayoutWithHeaderFooter>
                <Dashboard />
              </LayoutWithHeaderFooter>
            }
          />
          <Route
            path="/signin"
            element={
              <LayoutWithoutHeaderFooter>
                <Signin />
              </LayoutWithoutHeaderFooter>
            }
          />
          <Route
            path="/signup"
            element={
              <LayoutWithoutHeaderFooter>
                <Signup />
              </LayoutWithoutHeaderFooter>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
