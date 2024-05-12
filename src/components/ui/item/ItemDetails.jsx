import { ItemCount } from './ItemCount'
import { useCartContext } from '../../../hook/useCartContext';

export function ItemDetails({ id, imgUrl, title, price, description, stock }) {

     const { cart } = useCartContext();

     return (
          <article className="flex flex-col gap-2 rounded-lg" key={id}>
               <header>
                    <img src={imgUrl} alt={title} />
               </header>
               <footer>
                    <section>
                         <h3>{title}</h3>
                         <span>
                              {price}
                         </span>
                         <ItemCount stock={stock} productID={id} initial={cart ? cart[id] : 0} />
                         <span>¡Quedan {cart ? stock - cart[id] : stock} disponibles!</span>
                    </section>
                    <section>
                         <p>{description}</p>
                    </section>
               </footer>
          </article>
     )
}