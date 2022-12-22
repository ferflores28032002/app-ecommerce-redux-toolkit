import ecommerce from "./ecommerceApi";

export const products = async () => await ecommerce.get("/products");
export const shoes = async () => await ecommerce.get("/shoes");
export const productsId = async (id) => await ecommerce.get(`/products/${id}`);
