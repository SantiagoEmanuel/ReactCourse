import { useState } from "react";
import { Header } from "./components/Header";

export function App() {
  const [count, setCount] = useState(0);

  const urls = [{ url: "/", name: "Home" }];
  // Esta constante reemplaza la infomarcion de todas las categorias que sacaria de una API.
  const categories = ["Men's clothes", "Women's clothes"];

  function addCount() {
    setCount(count + 1);
  }

  function removeCount() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <>
      <Header urls={urls} categories={categories} count={count}>
        E-commerce
      </Header>
      <main className="flex flex-col gap-[50px]">
        <h2 className="text-center">Hi, this is my project.</h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="flex items-center justify-center w-[40px] h-[40px] border-2 rounded-full  ">
            {count}
          </p>
          <div className="flex flex-col items-center justify-center gap-4">
            <button
              onClick={addCount}
              className="rounded-xl text-balance px-5 py-2 bg-orange-500 border-2"
            >
              <i>Add shopping cart notification</i>
            </button>
            <button
              onClick={removeCount}
              className="rounded-xl text-balance px-5 py-2 bg-orange-500 border-2"
            >
              <i>Remove shopping cart notification</i>
            </button>
          </div>
        </div>
      </main>
      <footer>
        <p>CoderHouse | ReactJS course</p>
      </footer>
    </>
  );
}
