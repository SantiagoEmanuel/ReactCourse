import { CartIcon } from './icons/CartIcon';
import { useCartContext } from '../../hook/useCartContext'
import { Link } from 'react-router-dom';

export function CartWidget() {
     const { quantity } = useCartContext();

     return (
          <Link to={'/cart'} className='relative cursor-pointer'>
               <CartIcon width={24} height={24} />
               {quantity != 0 ? <span className='-right-2 -bottom-1 absolute content-center w-4 h-4 text-[10px] text-center bg-red-600 rounded-full'>{quantity}</span> : ''}
          </Link>
     )
}