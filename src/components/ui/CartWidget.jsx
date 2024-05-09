import { CartIcon } from './icons/CartIcon';
import { useCartContext } from '../../hook/useCartContext'

export function CartWidget() {
     const [{ cart }] = useCartContext();

     return (
          <span className='relative cursor-pointer'>
               <CartIcon width={24} height={24} />
               {cart != null ? <span className='-right-2 -bottom-1 absolute content-center w-4 h-4 text-[10px] text-center bg-red-600 rounded-full'>{cart}</span> : ''}
          </span>
     )
}