import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeCart } from "../store/slices/CarritoSlices";
import { CartItems } from "./";

export const Navbar = () => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  window.addEventListener("scroll", () => {
    document
      .querySelector(".header")
      .classList.toggle("ClaseScroll", window.scrollY > 30);
  });

  return (
    <header className="fixed header left-0 top-0 py-3 min-w-full z-50">
      
      <CartItems />

      <div className="px-4 container mx-auto  flex items-center justify-between">
        <Link to="/">
          <img src={`shopping-bags.png`} className=" w-10 md:w-12" />
        </Link>

        <button className="relative" onClick={() => dispatch(closeCart())}>
          <BiShoppingBag className="btn-shopping text-3xl text-white" />

          <span className="cart-shopping absolute -right-1 top-0 bg-white text-yellow-600 font-semibold rounded-full w-5 h-5 text-sm">
            {cart?.length}
          </span>
        </button>
      </div>
    </header>
  );
};
