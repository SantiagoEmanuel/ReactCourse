import { useParams } from 'react-router-dom';
import { useProducts } from '../hook/useProducts'
import { ItemList } from '../components/ItemList'

export function ItemListContainer() {
     const { category } = useParams();
     const { products } = useProducts(category);

     return (
          <section>
               {
                    products.length == 0 && category == null ? <h2 className='text-3xl font-bold text-center'>Loading...</h2> : ''
               }
               {
                    products?.data == 0 && category != null ? <h2 className='text-2xl font-bold text-center'>Sorry, i don't have products for {category} for now.</h2> : <ItemList items={products} />
               }
          </section>
     )
}