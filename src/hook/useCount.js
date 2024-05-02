import { useState } from "react"

export const useCount = (value = 0, stock) => {
     const [count, setCount] = useState(value)

     function add() {
          if (count < stock) setCount(count + 1)
     }

     function remove() {
          if (count > 0) setCount(count - 1)
     }

     return {
          count,
          add,
          remove
     }
}