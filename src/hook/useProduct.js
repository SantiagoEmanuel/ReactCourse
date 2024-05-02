import { useEffect, useState } from "react";
import { getItem } from '../functions/getItem'

export const useProduct = (id) => {
     const [product, setProduct] = useState([]);

     useEffect(() => {
          async function getData(id) {
               setProduct(await getItem(id));
          }
          getData(id);
     }, [id])

     return {
          product
     }
}