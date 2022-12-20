import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Button = ({ setIsOpen, isOpen, title }) => {
  return (
    <button
      className={`m-10 ${
        isOpen && "bg-pink-300 hover:bg-pink-400"
      } py-2 px-4 w-20 h-10  relative rounded text-white bg-indigo-400 hover:bg-indigo-500 flex items-center justify-center`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <AiOutlineLoading3Quarters
        className={` ${isOpen ? `animate-spin` : "opacity-0"} absolute`}
      />
      {!isOpen && title}
    </button>
  );
};


