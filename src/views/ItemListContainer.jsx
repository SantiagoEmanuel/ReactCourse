import { useParams } from "react-router-dom";
import { ItemList } from "../components/containers/ItemList";
import { useProducts } from "../hook/useProducts";
import { useState } from "react";

export function ItemListContainer() {
  const { category } = useParams();
  const { products } = useProducts();
  const [priceFilter, setPriceFilter] = useState(0);
  const [searchProduct, setSearchProduct] = useState(null);

  return (
    <>
      <div className="flex flex-col justify-between gap-10">
        <header className="flex w-full gap-8 max-[530px]:flex-col max-[530px]:gap-2">
          <div className="w-full">
            <label
              htmlFor="product-search"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="product-search"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search any product"
                onChange={(e) => {
                  setSearchProduct(e.target.value.toLowerCase());
                }}
              />
            </div>
          </div>
          <div className="w-full">
            <label
              htmlFor="priceFilter"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="number"
                id="priceFilter"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Enter a price"
                onChange={(e) => {
                  setPriceFilter(e.target.value);
                }}
              />
            </div>
          </div>
        </header>
        <section>
          {products?.length == 0 && !category && (
            <h2 className="text-center text-3xl font-bold">LOADING...</h2>
          )}
          {products?.length == 0 && category && (
            <h2 className="text-center  text-2xl font-bold">
              Sorry, i don't have products for {category} for now.
            </h2>
          )}
          {products?.length > 0 && (
            <ItemList
              items={products}
              categoryFilter={category ? category : null}
              priceFilter={priceFilter > 0 && priceFilter}
              searchFilter={searchProduct}
            />
          )}
        </section>
      </div>
    </>
  );
}
