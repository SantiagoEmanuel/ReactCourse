import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ItemListContainer } from './views/ItemListContainer'
import { ItemDetailsContainer } from './views/ItemDetailsContainer'
import { ErrorView } from './views/ErrorView'
import { LoginView } from './views/LoginView'
import { App } from './App'
import { CreateProductView } from './views/CreateProductView'
import './css/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ItemListContainer />
      },
      {
        path: '/category/:category',
        element: <ItemListContainer />
      },
      {
        path: '/item/:id',
        element: <ItemDetailsContainer />
      },
      {
        path: '/login',
        element: <LoginView />
      }, {
        path: '/create-product',
        element: <CreateProductView />
      }
    ],
    errorElement: <ErrorView />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
