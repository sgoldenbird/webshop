import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";
import { ProductContext } from "../contexts/ProductContext";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const ProductDetails = () => {
  //* get the product id from the url
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  //* get the single product based on the id in the array, products.
  const product = products.find((item) => item.id === parseInt(productId));

  //* if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  //* destructure product
  const { title, price, description, image } = product;

  return (
    <div>
      <Header />
      <Sidebar />
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
              <img
                className="max-w-[200px] lg:max-w-sm"
                src={image}
                alt={title}
              />
            </div>
            <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
              <h1 className="text-[26px] font-semibold mb-2 mx-auto lg:mx-0">
                {title}
              </h1>
              <div className="text-xl text-[#692d21] font-semibold mb-6">
                $ {parseFloat(price).toFixed(2)}
              </div>
              <p className="mb-8">{description}</p>
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-gray-700 py-4 px-8 text-white rounded-md "
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
