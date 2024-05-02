import { useEffect, useState } from "react";
import { getItems } from '../functions/getItems'

export const useProducts = (category = null) => {
     const [products, setProducts] = useState([]);

     useEffect(() => {
          async function getData() {
               setProducts(await getItems(category))
          }
          getData(category)
     }, [category])

     return {
          products
     }
}