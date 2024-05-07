import { useEffect, useState } from 'react';
import { CartIcon } from './CartIcon';

export function CartWidget({ count = 0 }) {
     const [productCount, setProductCount] = useState(0)
     useEffect(() => {
          setProductCount(count)
     }, [count])
     return (
          <span className='relative cursor-pointer'>
               <CartIcon width={24} height={24} />
               {productCount != 0 ? <span className='-right-2 -bottom-1 absolute p-[2px] text-xs text-center bg-red-600 rounded-full'>{productCount}</span> : ''}
          </span>
     )
}