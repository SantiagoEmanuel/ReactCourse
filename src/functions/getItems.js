export async function getItems(category) {
     if (category == null) {
          const data = await fetch(`https://e-commerce-db-65ce.onrender.com/products`).then(r => r.json())

          const newData = [];

          data.map(([{ id, imageUrl, title, description, price, stock }, { category }]) => {
               let x = { id, imageUrl, title, description, price, stock, category };
               newData.push(x)
          })

          return newData;
     } else {
          const data = await fetch(`https://e-commerce-db-65ce.onrender.com/products/categories/${category}`).then(r => r.json());
          const newData = [];
          if (data.length > 0) {
               data.map(([{ id, imageUrl, title, description, price, stock }]) => {
                    let x = { id, imageUrl, title, description, price, stock, category };
                    newData.push(x)
               })

               return newData;
          }
          return newData;
     }
}