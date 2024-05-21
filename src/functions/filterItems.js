export function itemFilter({ items, categoryFilter, searchFilter }) {
  return items.filter((product) => {
    const passCategoryFilter =
      categoryFilter == null
        ? product.category == product.category
        : product.category == categoryFilter;
    const passSearchFilter =
      searchFilter == null
        ? product.title == product.title
        : product.title.toLowerCase().includes(searchFilter.toLowerCase());

    return passCategoryFilter && passSearchFilter;
  });
}
