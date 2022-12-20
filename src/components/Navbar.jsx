import { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Cart } from "./Cart";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  window.addEventListener("scroll", () => {
    document
      .querySelector("header")
      .classList.toggle("ClaseScroll", window.scrollY > 30);
  });

  return (
    <header className="fixed left-0 top-0 py-3 min-w-full z-50">
      <Cart
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        inicialP="-right-full"
        finallyP="right-0"
      >
        <div className="py-4 px-3 h-[70%]  overflow-y-scroll "></div>

        <div className="p-3">
          <div className="flex text-sm items-center justify-between ">
            <h1>SubTotal: </h1>
            <strong>C$ 578.56</strong>
          </div>
          <button className="block w-full mt-2 py-2 px-4 text-center text-white bg-red-400 rounded ">
            Save
          </button>
          <button className="block w-full py-2 px-4 text-center text-white bg-indigo-500 mt-2 rounded ">
            Remove
          </button>
        </div>
      </Cart>

      <div className="px-4 container mx-auto  flex items-center justify-between">
        <Link to="/">
          <img src={`shopping-bags.png`} className=" w-10 md:w-12" />
        </Link>

        <button className="relative" onClick={() => setIsOpen(!isOpen)}>
          <BiShoppingBag className="btn-shopping text-3xl text-white" />

          <span
            className="cart-shopping absolute -right-1 top-0 bg-white text-yellow-600 font-semibold rounded-full w-5 h-5 text-sm"
          >1</span>
        </button>
      </div>
    </header>
  );
};
