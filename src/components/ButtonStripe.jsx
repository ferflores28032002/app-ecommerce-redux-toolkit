import { useDispatch, useSelector } from "react-redux";
import ecommerce from "../api/ecommerceApi";
import { vaciarCart } from "../store/slices/CarritoSlices";

export const ButtonStripe = () => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch()

  const sendProducts = async () => {
    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      };
      const { data } = await ecommerce.post("/create-checkout-session", {
        cart,
      }, config);

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
