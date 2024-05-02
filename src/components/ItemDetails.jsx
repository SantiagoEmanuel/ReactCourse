import { ItemCount } from './ItemCount'

export function ItemDetails({ id, imgUrl, title, price, description, stock }) {
     return (
          <article className="flex flex-col gap-2 rounded-lg">
               <header>
                    <img src={imgUrl} alt={title} />
               </header>
               <footer>
                    <section>
                         <h3>{title}</h3>
                         <span>
                              {price}
                         </span>
                         <ItemCount stock={stock} />
                    </section>
                    <section>
                         <p>{description}</p>
                    </section>
               </footer>
          </article>
     )
}