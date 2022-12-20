

import ecommerce from "./ecommerceApi";

export const products = async () => await ecommerce.get('/products');