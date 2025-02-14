import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ filteredProduct }) => {
  const { addToCart } = useContext(CartContext);

  const { id, image, category, title, price } = filteredProduct;
  return (
    <div>
      <div className="border border-[#A47B73] h-[300px] mb-4 relative overflow-hidden group transiton">
        <div className="w-full h-full flex justify-center items-center">
          <Link
            to={`/product/${id}`}
            className="w-[200px] mx-auto flex justify-center items-center"
          >
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </Link>
        </div>
        <div className="absolute top-1 -right-5 group-hover:right-1 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(filteredProduct, id)}>
            <div className="flex justify-center items-center text-white w-12 h-1/2 bg-[#A47B73]">
              <BsPlus className="text-3xl" />
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">${price}</div>
      </div>
    </div>
  );
};

export default Product;
