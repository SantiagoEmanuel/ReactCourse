import { useUserContext } from "../context/userContext"

export function CreateProductView() {

     const user = useUserContext()

     function handleSubmit(e) {
          e.preventDefault();
          fetch('http://localhost:5000/products', {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
                    "Authorization": user.token
               },
               body: [
                    {
                         "title": JSON.stringify(e.target.title.value),
                         "imageUrl": JSON.stringify(e.target.imageUrl.value),
                         "description": JSON.stringify(e.target.description.value),
                         "category": JSON.stringify(e.target.category.value),
                         "stock": JSON.stringify(e.target.stock.value),
                         "price": JSON.stringify(e.target.price.value)
                    }
               ]
          })
     }

     return (
          <form className="flex flex-col max-w-screen-sm gap-4 m-auto" onSubmit={handleSubmit}>
               <label className="flex flex-col w-full">
                    Title:
                    <input type="text" name="title" placeholder="Title" className=" rounded-xl px-4 py-2 border" />
               </label>
               <label className="flex flex-col w-full">
                    Image Url:
                    <input type="text" name="imageUrl" placeholder="Image Url" className=" rounded-xl px-4 py-2 border" />
               </label>
               <label className="flex flex-col w-full">
                    Description:
                    <input type="text" name="description" placeholder="Description" className=" rounded-xl px-4 py-2 border" />
               </label>
               <label className="flex flex-col w-full">
                    Category:
                    <input type="text" name="category" placeholder="Category" className=" rounded-xl px-4 py-2 border" />
               </label>
               <label className="flex flex-col w-full">
                    Stock:
                    <input type="number" name="stock" placeholder="Stock" className=" rounded-xl px-4 py-2 border" />
               </label>
               <label className="flex flex-col w-full">
                    Price:
                    <input type="number" name="price" placeholder="Price" className=" rounded-xl px-4 py-2 border" />
               </label>

               <button className="hover:bg-gray-600 rounded-xl hover:text-white py-2 text-xl font-bold text-orange-600 transition-colors">Create product</button>
          </form>
     )
}