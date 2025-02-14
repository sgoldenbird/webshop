import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

/* -----------------------------------------------------------------------------------------------------------------
learn: 

- When a component wraps its children with a context provider, 
as in the case of the ProductProvider component wrapping its children with ProductContext.Provider, it means that 
//* any component nested within the ProductProvider will have access to the context and its provided value.

- By passing {{ products }} as the value, 
//* you're making the products state accessible to all components that are descendants of the ProductContext.Provider.



*/
