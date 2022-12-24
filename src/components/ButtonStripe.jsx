import { useSelector } from "react-redux";
import ecommerce from "../api/ecommerceApi";

export const ButtonStripe = () => {

  const { cart } = useSelector(store => store.cart)

  const sendProducts = async () => {

    const { data } = await ecommerce.post('/create-checkout-session', { cart })
    
    if(data.URL) {
      window.location = data.URL
    }
  }

  return (
    <button onClick={sendProducts} className="block w-full py-2 px-4 text-center text-white bg-yellow-500 mt-2 rounded ">
      check out
    </button>
  );
};
