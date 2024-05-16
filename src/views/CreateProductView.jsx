import { useUserContext } from "../hook/useUserContext";

export function CreateProductView() {
  const user = useUserContext();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://e-commerce-db-65ce.onrender.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: user.token,
      },
      body: JSON.stringify({
        title: e.target.title.value,
        imageUrl: e.target.imageUrl.value,
        description: e.target.description.value,
        category: e.target.category.value,
        stock: e.target.stock.value,
        price: e.target.price.value,
      }),
    });
  }

  return (
    <form
      className="m-auto flex max-w-screen-sm flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <label className="flex w-full flex-col">
        Title:
        <input
          type="text"
          name="title"
          placeholder="Title"
          className=" rounded-xl border px-4 py-2"
        />
      </label>
      <label className="flex w-full flex-col">
        Image Url:
        <input
          type="text"
          name="imageUrl"
          placeholder="Image Url"
          className=" rounded-xl border px-4 py-2"
        />
      </label>
      <label className="flex w-full flex-col">
        Description:
        <input
          type="text"
          name="description"
          placeholder="Description"
          className=" rounded-xl border px-4 py-2"
        />
      </label>
      <label className="flex w-full flex-col">
        Category:
        <input
          type="text"
          name="category"
          placeholder="Category"
          className=" rounded-xl border px-4 py-2"
        />
      </label>
      <label className="flex w-full flex-col">
        Stock:
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          className=" rounded-xl border px-4 py-2"
        />
      </label>
      <label className="flex w-full flex-col">
        Price:
        <input
          type="number"
          name="price"
          placeholder="Price"
          className=" rounded-xl border px-4 py-2"
        />
      </label>

      <button className="rounded-xl py-2 text-xl font-bold text-orange-600 transition-colors hover:bg-gray-600 hover:text-white">
        Create product
      </button>
    </form>
  );
}
