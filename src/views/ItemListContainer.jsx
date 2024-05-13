import { useParams } from 'react-router-dom';
import { ItemList } from '../components/containers/ItemList'
import { useProductContext } from '../hook/useProductContext'

export function ItemListContainer() {
     const { category } = useParams();
     const products = useProductContext()
     return (
          <section>
               {
                    products.length == 0 && <h2 className='text-3xl font-bold text-center'>LOADING...</h2>
               }
               {
                    products.length == 0 && category == null && <h2 className='text-2xl font-bold text-center'>Sorry, i don't have products for {category} for now.</h2>
               }
               {
                    products.length > 0 && <ItemList items={products} filter={category != null ? category : null} />
               }
          </section>
     )
}