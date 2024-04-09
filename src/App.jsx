import { useState } from "react";
import { NavBar } from "./components/NavBar";

export function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <header className="flex items-center justify-between w-full px-5 py-4">
        <h1>E-Commerce</h1>
        <NavBar />
      </header>
      <main className="flex flex-col gap-[50px]">
        <h2>Hi, this is my project.</h2>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="flex items-center justify-center w-[40px] h-[40px] border-2 rounded-full  ">
            {count}
          </p>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="rounded-xl px-5 py-2 bg-orange-500 border-2"
          >
            Add count
          </button>
        </div>
      </main>
      <footer>
        <p>CoderHouse | ReactJS course</p>
      </footer>
    </>
  );
}
