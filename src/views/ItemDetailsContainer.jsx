import { Link } from 'react-router-dom';
import { ItemDetails } from '../components/ui/item/ItemDetails'
import { useParams } from 'react-router-dom';
import { ArrowLeft } from '../components/ui/icons/ArrowLeft';
import { useProductContext } from '../hook/useProductContext';

export function ItemDetailsContainer() {
     const { id } = useParams()
     const products = useProductContext()
     return (
          <section>
               <Link to={'/'} className='flex items-center gap-2 text-xl font-bold'><ArrowLeft /> Back</Link>
               {
                    products.map((product) => (
                         product.id == id && <ItemDetails key={product.id} id={product.id} title={product.title} price={product.price} stock={product.stock} imgUrl={product.imageUrl} description={product.description} />
                    ))
               }
          </section>
     )
}