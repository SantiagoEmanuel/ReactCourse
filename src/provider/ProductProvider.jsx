import { ProductContext } from "../context/ProductContext";
import { useProducts } from "../hook/useProducts";

export function ProductsProvider({ children }) {
     const { products } = useProducts()

     return (
          <ProductContext.Provider value={products}>
               {children}
          </ProductContext.Provider>
     )
}