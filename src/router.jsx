import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import App from "./App";

export const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFound /> },
  {
    path: "/product/:productId",
    element: <ProductDetails />,
    errorElement: <NotFound />,
  },

  // { path: ":slug", element: , errorElement: <NotFound /> },
]);

/*
learn:



*/
