import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/about')
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-sm">
                <h1 className="text-center text-2xl font-bold">Home Page</h1>
                <div className="flex justify-evenly items-center text-xs">
                    <button
                        className="p-1 m-2 rounded-sm font-bold text-white  bg-purple-600 hover:bg-purple-300"
                        onClick={handleNavigate}
                    >
                        Button to About
                    </button>
                    <Link to="/">
                        <span className="p-1 border font-bold border-purple-600 rounded-sm hover:bg-purple-300">
                            Link to Home
                        </span>
                    </Link>
                    <Link to="/about">
                        <span className="p-1 border font-bold border-purple-600 rounded-sm hover:bg-purple-300">
                            Link to About
                        </span>
                    </Link>
                    <Link to="/products">
                        <span className="p-1 border font-bold border-purple-600 rounded-sm hover:bg-purple-300">
                            Link to Products
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
