import { useState } from "react";
import { Header } from "./components/layout/Header";
import { CustomLink } from "./components/ui/CustomLink";
import { Typography } from "./components/ui/Typography";

export function App() {
  const [count, setCount] = useState(0);

  // Esta constante reemplaza la información de todas las categorías que sacaría de una API.
  const categories = [
    {
      name: "Men's clothes",
      url: "men-clothes",
    },
    {
      name: "Women's clothes",
      url: "women-clothes",
    },
  ];

  function addCount() {
    setCount(count + 1);
  }

  function removeCount() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <>
      <Header categories={categories} count={count}>
        E-commerce
      </Header>
      <main className="flex flex-col gap-[50px]">
        <Typography As="h2" className="text-center">
          Hi, this is my project.
        </Typography>
        <div className="flex flex-col items-center justify-center gap-4">
          <Typography
            As="p"
            className="flex items-center justify-center w-[40px] h-[40px] border-2 rounded-full"
          >
            {count}
          </Typography>
          <div className="flex flex-col items-center justify-center gap-4">
            <button
              onClick={addCount}
              className="rounded-xl text-balance px-5 py-2 bg-orange-500 border-2"
            >
              <Typography As="i">Add shopping cart notification</Typography>
            </button>
            <button
              onClick={removeCount}
              className="rounded-xl text-balance px-5 py-2 bg-orange-500 border-2"
            >
              <Typography As="i">Remove shopping cart notification</Typography>
            </button>
          </div>
        </div>
      </main>
      <footer className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <Typography As="span" className="animate-pulse">
            ─{">"}
          </Typography>
          <CustomLink
            to={"https://github.com/SantiagoEmanuel/ReactCourse"}
            label="REPOSITORY"
            className="border-2 rounded-md text-xs text-[#eb6e26] px-3 py-1 hover:bg-[#eb6e26] hover:text-white transition-colors"
            title={"Go to the project repository"}
            target="_black"
          />
          <Typography As="span" className="animate-pulse">
            {"<"}─
          </Typography>
        </div>
        <Typography As="p">CoderHouse | ReactJS course</Typography>
      </footer>
    </>
  );
}
