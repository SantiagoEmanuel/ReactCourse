export async function getItem(ids) {
     const [{ id, title, description, imageUrl, price, stock }, { category }] = await fetch(`https://e-commerce-db-65ce.onrender.com/products/${ids}`).then(r => r.json());

     const data = {
          id, title, description, imageUrl, price, stock, category
     }

     return data;
}