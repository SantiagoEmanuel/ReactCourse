import { useEffect, useState } from "react"
import { getCategories } from "../functions/getCategories"

export const useCategories = () => {
     const [categories, setCategories] = useState([])

     useEffect(() => {
          async function getData() {
               setCategories(await getCategories());
          }
          getData()
     }, [])

     return {
          categories
     }
}