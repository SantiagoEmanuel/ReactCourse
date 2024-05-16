import { useEffect, useState } from "react";
import { getItems } from "../functions/getItems";
import { getItem } from "../functions/getItem";

export const useProducts = (id = null) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData(id) {
      if (id == null) {
        setProducts(await getItems());
      } else {
        setProducts(await getItem(id));
      }
    }
    getData(id);
  }, []);

  return {
    products,
  };
};
