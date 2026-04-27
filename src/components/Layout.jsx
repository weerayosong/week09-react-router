import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="container max-w-6xl mx-auto">
            <div className="sticky top-0 z-50 shadow-md h-20 flex justify-between items-center bg-lime-400">
                {/* <div className="font-bold px-1">Logo</div> */}
                <div className="font-bold text-white text-lg px-10">
                    <Link to="/">
                        <span className="p-1 font-bold hover:text-lime-800">
                            Home
                        </span>
                    </Link>
                    <Link to="/about">
                        <span className="p-1 font-bold hover:text-lime-800">
                            About
                        </span>
                    </Link>
                    <Link to="/contact">
                        <span className="p-1 font-bold hover:text-lime-800">
                            Contact
                        </span>
                    </Link>
                    <Link to="/products">
                        <span className="p-1 font-bold hover:text-lime-800">
                            Products
                        </span>
                    </Link>
                    <Link to="/fetch1">
                        <span className="p-1 font-bold hover:text-lime-800">
                            Fetch 1
                        </span>
                    </Link>
                    <Link to="/fetch2">
                        <span className="p-1 font-bold hover:text-lime-800">
                            Fetch 2
                        </span>
                    </Link>
                </div>
                <div className="font-bold px-2">Cart Icon</div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
