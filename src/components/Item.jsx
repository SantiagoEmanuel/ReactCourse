import { Link } from "react-router-dom";

export function Item({ id, img, title, price }) {
     return (
          <article className="rounded-xl flex flex-col justify-between gap-4 text-black bg-white">
               <header className="">
                    <img src={img} alt={title} className="aspect-square rounded-lg" />
               </header>
               <footer className="flex flex-col gap-4">
                    <section className="px-4">
                         <h3>{title}</h3>
                         <span>
                              ${price}
                         </span>
                    </section>
                    <Link to={`/item/${id}`} className='text-center hover:bg-[#212121] hover:text-white text-xl font-bold transition-colors rounded-b-lg py-4 '> View More </Link>
               </footer>
          </article>
     )
}