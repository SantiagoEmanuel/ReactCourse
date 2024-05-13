import { useCount } from '../../../hook/useCount'
import { useCartToggleContext } from '../../../hook/useCartToggleContext'

export function ItemCount({ stock, initial, productID = null }) {
     const { count, add, remove } = useCount(initial, stock);
     const { addCart } = useCartToggleContext()

     return (
          <div className='flex flex-col gap-4'>
               <div className='flex items-center justify-between'>
                    <button onClick={remove} disabled={count < 1} className='hover:bg-[#333333] hover:text-white disabled:hover:text-[#ccc] disabled:text-[#808080] disabled:hover:bg-[#212121] px-4 py-2 text-xl font-bold transition-colors rounded-sm' >-</button>
                    {count}
                    <button onClick={add} disabled={count == stock} className='hover:bg-[#333333] hover:text-white disabled:hover:text-[#ccc] disabled:text-[#808080] disabled:hover:bg-[#212121] px-4 py-2 text-xl font-bold transition-colors rounded-sm' >+</button>
               </div>
               <button disabled={count < 1} className='hover:bg-[#333333] hover:text-white disabled:hover:text-[#ccc] disabled:text-[#808080] disabled:hover:bg-[#212121] text-xl font-bold transition-colors rounded-sm py-4' onClick={() => addCart([{ id: productID, COUNT: count }])} >
                    Add to cart
               </button>
          </div>
     )
}