export async function getItems(category) {
     if (category == null) {
          const data = await fetch(`https://e-commerce-db-65ce.onrender.com/products`).then(r => r.json())
          return data;
     } else {
          const data = await fetch(`https://e-commerce-db-65ce.onrender.com/products/categories/${category}`).then(r => r.json());
          return data;
     }
}