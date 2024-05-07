import { redirect } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import { useCount } from '../hook/useCount'

export function ItemCount({ stock, initial = 0, id_product }) {
     const { count, add, remove } = useCount(initial, stock);
     const user = useUserContext();

     const addCart = () => {
          if (user != null) {
               fetch('https://e-commerce-db-65ce.onrender.com/cart', {
                    method: "POST",
                    headers: {
                         Authorization: user.token,
                         'Content-Type': 'application/json',
                         "Access-Control-Allow-Origin": "https://e-commerce-delta-livid-65.vercel.app/"
                    },
                    body: {
                         "id_product": id_product,
                         "id_user": user.id,
                         "count_product": count
                    }
               })
          } else {
               redirect('/login')
          }
     }

     return (
          <div className='flex flex-col gap-4'>
               <div className='flex items-center justify-between px-4'>
                    <button onClick={remove} disabled={count < 1} className='hover:bg-[#212121] hover:text-white disabled:hover:text-[#ccc] disabled:text-[#808080] disabled:hover:bg-[#909090] px-4 py-2 text-xl font-bold transition-colors rounded-sm' >-</button>
                    {count}
                    <button onClick={add} disabled={count == stock} className='hover:bg-[#212121] hover:text-white disabled:hover:text-[#ccc] disabled:text-[#808080] disabled:hover:bg-[#909090] px-4 py-2 text-xl font-bold transition-colors rounded-sm' >+</button>
               </div>
               <button disabled={count < 1} className='hover:bg-[#212121] hover:text-white disabled:hover:text-[#ccc] disabled:text-[#808080] disabled:hover:bg-[#909090] text-xl font-bold transition-colors rounded-sm py-4 rounded-b-lg' onClick={addCart}>
                    Add to cart
               </button>
          </div>
     )
}