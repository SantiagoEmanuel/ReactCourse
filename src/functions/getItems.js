export async function getItems() {
     const data = await fetch(`https://e-commerce-db-65ce.onrender.com/products`).then(r => r.json())
     return data;
}