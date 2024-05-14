import { Link, useParams } from 'react-router-dom';
import { ItemDetails } from '../components/ui/item/ItemDetails'
import { ArrowLeft } from '../components/ui/icons/ArrowLeft';
import { useProductContext } from '../hook/useProductContext';
import { getItem } from '../functions/getItem';

export function ItemDetailsContainer() {
     const { id } = useParams()
     const products = useProductContext()
     const product = getItem(id, products)

     return (
          <section>
               <Link to={'/'} className='flex items-center gap-2 text-xl font-bold'>
                    <ArrowLeft />
                    Back
               </Link>
               {
                    <ItemDetails
                         key={product.id}
                         id={product.id}
                         title={product.title}
                         price={product.price}
                         stock={product.stock}
                         imgUrl={product.imageUrl}
                         description={product.description}
                    />
               }
          </section>
     )
}