import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import Fetch1 from './pages/Fetch1'
import Fetch2 from './pages/Fetch2'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },

            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/products/:productId',
                element: <ProductDetail />,
            },
            {
                path: '/fetch1',
                element: <Fetch1 />,
            },
            {
                path: '/fetch2',
                element: <Fetch2 />,
            },
        ],
    },
])

export default function App() {
    return <RouterProvider router={router} />
}
