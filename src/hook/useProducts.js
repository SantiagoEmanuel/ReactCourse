import { useEffect, useState } from "react";
import { getItems } from '../functions/getItems'

export const useProducts = () => {
     const [products, setProducts] = useState([]);

     useEffect(() => {
          async function getData() {
               setProducts(await getItems())
          }
          getData()
     }, [])

     return {
          products
     }
}