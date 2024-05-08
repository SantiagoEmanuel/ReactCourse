import { Link } from "react-router-dom";

export function Brand({ children }) {
     return (
          <h1>
               <Link href="/">{children}</Link>
          </h1>
     )
}