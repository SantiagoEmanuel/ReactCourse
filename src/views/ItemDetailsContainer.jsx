import { ItemDetails } from '../components/ui/item/ItemDetails'
import { useProduct } from '../hook/useProduct'
import { useParams } from 'react-router-dom';

export function ItemDetailsContainer() {
     const { id } = useParams()
     const { product } = useProduct(id);

     return (
          <section>
               {
                    <ItemDetails key={product.id} id={product.id} title={product.title} price={product.price} stock={product.stock} imgUrl={product.imageUrl} description={product.description} />
               }
          </section>
     )
}