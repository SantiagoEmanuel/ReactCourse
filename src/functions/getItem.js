export function getItem(id_product, products) {
     const data = products.find(({ id }) => id == id_product);
     return data;
}