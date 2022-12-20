import { useQuery } from "react-query";
import { products } from "../api/ProductsEcommerce";
import { BsPlus } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { ProductsItems } from "./";

export const Products = () => {
  const { data, isError, isLoading } = useQuery("[products]", products);

  return (
    <div className="container mx-auto mt-10 flex flex-wrap items-center justify-center gap-3">
      {data?.data.productos.map((product) => (
        <ProductsItems key={product._id} product={product} />
      ))}
    </div>
  );
};
