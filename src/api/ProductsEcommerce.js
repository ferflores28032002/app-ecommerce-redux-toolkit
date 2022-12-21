import ecommerce from "./ecommerceApi";

export const products = async () => await ecommerce.get("/products");
export const productsId = async (id) => await ecommerce.get(`/products/${id}`);
