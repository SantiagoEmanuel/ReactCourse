export async function getCategories() {
     const newData = []
     const data = await fetch('https://e-commerce-db-65ce.onrender.com/categories').then(r => r.json());

     data.map(({ category }) => {
          newData.push({
               name: category,
               url: `category/${category}`
          })
     })

     return newData;
}