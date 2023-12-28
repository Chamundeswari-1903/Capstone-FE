import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";


const Ecommerce = lazy(() => import("./pages/dashboard/ecommerce"));
const Login = lazy(() => import("./pages/auth/login"));

import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";



//Ecommerce-Pages
const EcommercePage = lazy(() => import("./pages/ecommerce"));

import { ProductDetails } from "./pages/ecommerce/productDetails";
import Cart from "./pages/ecommerce/cart";
import Wishlist from "./pages/ecommerce/wish-list";
import Orders from "./pages/ecommerce/orders";
import OrderDetails from "./pages/ecommerce/orderDetails";
import Checkout from "./pages/ecommerce/checkout";
import EditProduct from "./pages/ecommerce/edit-product";
import Customers from "./pages/ecommerce/customers";
import Sellers from "./pages/ecommerce/sellers";
import AddProduct from "./pages/ecommerce/add-product";
import InvoiceEPage from "./pages/ecommerce/invoice-ecompage";

function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Ecommerce />} />
          <Route path="ecommerce" element={<Ecommerce />} /> 
          <Route path="products" element={<EcommercePage />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="orders" element={<Orders />} />
          <Route path="order-details" element={<OrderDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="edit-product" element={<EditProduct />} />
          <Route path="customers" element={<Customers />} />
          <Route path="sellers" element={<Sellers />} />
          <Route path="invoice-ecommerce" element={<InvoiceEPage />} />

          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
