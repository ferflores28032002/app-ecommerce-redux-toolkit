import {
  addToCart,
  openCart,
  removeCart,
  removeItemsCart,
  vaciarCart,
} from "../store/slices/CarritoSlices";
import { Cart, ButtonStripe } from "./";
import { FiDelete } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import { HiMinusSm } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

export const CartItems = () => {
  const { cart, isOpen } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((contador, product) => contador + product.price * product.cantidad,0);
  return (
    <Cart
      isOpen={isOpen}
      setIsOpen={openCart}
      lenght={cart.length}
      inicialP="-right-full"
      finallyP="right-0"
    >
      <div className="py-4 px-3 h-[70%] overflow-y-scroll ">
        <div>
          {cart?.map((carrito) => (
            <div key={carrito._id}>
              <div className="flex py-4 gap-3 border-b">
                <img
                  className="w-20 h-24 rounded-lg"
                  src={carrito.image_logo}
                />

                <div>
                  <div className="flex justify-between  w-72">
                    <div className="text-sm">{carrito.name}</div>
                    <button
                      onClick={() => dispatch(removeItemsCart(carrito._id))}
                    >
                      <FiDelete />
                    </button>
                  </div>

                  <div>
                    <div className="flex mt-1 text-sm">
                      <h1>
                        $
                        {carrito.price +
                          "  x  " +
                          carrito.cantidad +
                          " = " +
                          (carrito.price * carrito.cantidad).toFixed(2)}
                      </h1>
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-6 py-1 mt-3 rounded border w-24 items-center justify-center">
                      <button onClick={() => dispatch(addToCart(carrito))}>
                        <BsPlus className="text-xl" />{" "}
                      </button>
                      <button onClick={() => dispatch(removeCart(carrito._id))}>
                        <HiMinusSm className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 border-t">
        <div className="flex text-sm  items-center justify-between ">
          <h1>Total: $ {total.toFixed(2)} </h1>
          <button
            onClick={() => dispatch(vaciarCart())}
            className="p-1 mr-2 rounded  bg-red-300 text-white"
          >
            <MdDelete className="text-xl" />
          </button>
        </div>
        <button className="block text-sm w-full mt-2 py-2 px-4 text-center text-white bg-red-300 rounded ">
          view cart
        </button>
              <ButtonStripe />            
      </div>

    </Cart>
  );
};
