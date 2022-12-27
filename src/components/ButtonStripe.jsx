import { useDispatch, useSelector } from "react-redux";
import ecommerce from "../api/ecommerceApi";
import { vaciarCart } from "../store/slices/CarritoSlices";

export const ButtonStripe = () => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch()

  const sendProducts = async () => {
    try {
      const { data } = await ecommerce.post("/create-checkout-session", {
        cart,
      });

      if (data.URL) {
        window.location.href = data.URL;
      }

      dispatch( vaciarCart() )

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={sendProducts}
      className="block w-full py-2 px-4 text-center text-white bg-yellow-500 mt-2 rounded "
    >
      check out
    </button>
  );
};
