import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import ProductProvider from "./contexts/ProductContext";
import SidebarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);

/*
learn: ProductProvider로 감쌌기 때문에 모든 컴포넌트가 ProductProvider의 children이 된다. 


*/
