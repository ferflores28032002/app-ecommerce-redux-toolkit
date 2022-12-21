import { AiFillEye } from "react-icons/ai";
import { BsPlus, BsStarHalf } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/slices/CarritoSlices";
import { AiFillStar } from "react-icons/ai";

export const ProductsItems = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="relative border shadow flex flex-col gap-2 rounded w-96 h-[36rem] lg:w-72 lg:h-[27rem] group transition overflow-hidden"
      key={product._id}
    >
      <img
        className="rounded h-[80%]"
        src={product.image_logo}
        alt={product.name}
      />
      <div className="px-4">
        <p className="text-sm">{product.name}</p>

        <div className="flex text-yellow-400  text-xl mt-1">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <BsStarHalf />
        </div>
        <p className="mt-1 text-sm">
          <strong>C$ {product.price}</strong>
        </p>
      </div>
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
