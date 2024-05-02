import { useEffect } from 'react';
import { CartIcon } from './CartIcon';
import { useState } from 'react';

export function CartWidget({ count = 0 }) {
     const [productCount, setProductCount] = useState(0)
     useEffect(() => {
          count.map(x => setProductCount(productCount + x))
     }, [count])
     return (
          <span className='relative cursor-pointer'>
               <CartIcon width={24} height={24} />
               {productCount != 0 ? <i className='-right-1 -bottom-1 absolute w-4 h-4 text-xs text-center bg-red-600 rounded-full'>{productCount}</i> : ''}
          </span>
     )
}