import Typed from "react-typed";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import imagen from "../assets/bgLogo2.jpg";

export const Header = () => {
  
  return (
    <div>
      <Navbar />

      <div
        style={{ backgroundImage: `url(${imagen})` }}
        className="min-h-screen min-w-full bg-no-repeat bg-cover  flex items-center justify-end pr-24"
      >
        <div className="px-4 text-lg lg:text-3xl text-white  ">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              Fashion Store{" "}
              <span className="text-yellow-400 text-2xl">-30% Desc</span>
            </h1>

            <div className="flex gap-6 justify-center items-center mt-2">
              <Link to="/">
                <img
                  src={`shopping-bags.png`}
                  className="w-40 lg:w-32 animate-pulse"
                />
              </Link>
              <div>
                <h1 className="mt-4 text-xl lg:text-3xl font-semibold">
                  Get up to <span className="text-yellow-400">30%</span> off new
                  arrivals
                </h1>
                <div className="flex text-xl lg:text-2xl font-semibold gap-4">
                  <div>
                    <Typed
                      className="text-yellow-400 "
                      strings={["Shirts", "Jeans", "Shoes", "dresses"]}
                      loop={true}
                      typeSpeed={150}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-start md:text-center">
            <button className="text-2xl md:text-4xl p-4 animate-bounce mt-16 border-none bg-yellow-500 rounded-full shadow-2xl">
              <HiOutlineArrowSmDown />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
