import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/about')
    }

    return (
        <div>
            <h1 className="text-center text-2xl font-bold p-4">Home Page</h1>
            <button
                className="p-1 m-2 rounded-sm font-bold text-white  bg-purple-600 hover:bg-purple-300"
                onClick={handleNavigate}
            >
                Button to About
            </button>
            <Link to="/about">
                <span className="p-1 border font-bold border-purple-600 rounded-sm hover:bg-purple-300">
                    Link to About
                </span>
            </Link>
        </div>
    )
}
