import { AiFillEye } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/slices/CarritoSlices";

export const ProductsItems = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="relative flex flex-col gap-2 rounded w-52 h-80 group transition overflow-hidden"
      key={product._id}
    >
      <img
        className="rounded h-[80%]"
        src={product.image_logo}
        alt={product.name}
      />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <div className="absolute group-hover:opacity-100 group-hover:right-0 -right-11  opacity-0 top-0  transition-all duration-300 flex flex-col justify-center items-center gap-1  bg-white">
        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white"
        >
          <BsPlus className="text-3xl " />
        </button>
        <Link
          to={`/${product._id}`}
          className="w-12 h-12 flex items-center justify-center text-gray-500 shadow-lg"
        >
          <AiFillEye className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};
