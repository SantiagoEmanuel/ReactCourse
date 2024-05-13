import { ItemCount } from './ItemCount'
import { useCartContext } from '../../../hook/useCartContext';

export function ItemDetails({ id, imgUrl, title, price, description, stock }) {

     const { cart } = useCartContext();

     return (
          <article className="flex flex-col items-center justify-center gap-24 pt-24 pb-10" key={id}>
               <header className='relative flex items-center justify-center'>
                    <img src={imgUrl} alt={title} className='-z-10 blur-sm max-sm:scale-110 absolute scale-125 rounded-sm max-[500px]:scale-100 transition-transform' />
                    <img src={imgUrl} alt={title} className='rounded-full max-w-[400px] aspect-auto w-[80%] mix-blend-multiply' />
               </header>
               <footer className='flex flex-col items-center gap-8'>
                    <section className='max-w-[400px] w-full px-2 flex flex-col gap-4'>
                         <h3 className='text-2xl'>{title}</h3>
                         <span className='opacity-40'>
                              ${price}
                         </span>
                         <ItemCount stock={stock} productID={id} initial={cart ? cart[id] : 0} />
                         <span className='font-semibold text-center text-orange-600'>¡Quedan {cart ? isNaN(cart[id]) ? stock : stock - cart[id] : stock} disponibles!</span>
                    </section>
                    <section >
                         <p className='text-balance text-xl text-center'>{description}</p>
                    </section>
               </footer>
          </article>
     )
}