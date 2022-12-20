import { HiOutlineArrowSmRight } from "react-icons/hi";

export const Cart = ({ isOpen, setIsOpen, inicialP, finallyP, children }) => {
  return (
    <div
      className={`fixed top-0 ${
        isOpen ? inicialP : finallyP
      } w-full md:w-[25rem] lg:w-[27rem] z-50  shadow-2xl bg-white h-[100%] transition-all duration-500`}
    >
      <header className="py-4 px-3 flex justify-between items-center border-b ">
        <h1 className="text-sm">Shopping Cart (0)</h1>

        <button onClick={() => setIsOpen(!isOpen)}>
          <HiOutlineArrowSmRight className="text-2xl" />
        </button>
      </header>

      {children}
    </div>
  );
};
