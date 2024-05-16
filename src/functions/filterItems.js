export function itemFilter({
  items,
  categoryFilter,
  priceFilter,
  searchFilter,
}) {
  return items.filter((product) => {
    const passCategoryFilter =
      categoryFilter == null
        ? product.category == product.category
        : product.category == categoryFilter;
    const passSearchFilter =
      searchFilter == null
        ? product.title == product.title
        : product.title.toLowerCase().includes(searchFilter.toLowerCase());

    const passPriceFilter = product.price >= priceFilter;

    return passCategoryFilter && passPriceFilter && passSearchFilter;
  });
}
