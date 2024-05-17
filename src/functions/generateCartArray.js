export function generateCartArray(products, cart) {
  const newCart = [];
  let newTotal = 0;
  for (const key in cart) {
    products.map(({ id, title, imageUrl, price }) => {
      if (id == key) {
        newCart.push({
          id: key,
          title: title,
          imageUrl: imageUrl,
          count: cart[key],
          price: price
        });
        newTotal += price * cart[key];
      }
    });
  }

  return {
    newCart,
    newTotal,
  };
}
