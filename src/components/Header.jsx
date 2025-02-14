import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`bg-[#CAA092] ${
        isActive && "py-2 shadow-md"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-[50px]">
        <Link to={"/"}>
          <div>
            <FaBars className="w-6 h-6" />
          </div>
        </Link>

        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer flex relative "
        >
          <BsBag className="text-2xl" />
          <div className="absolute -right-2 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center bg-[#692d21] text-white">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
