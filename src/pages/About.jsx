import { Link } from 'react-router-dom'
export default function About() {
    return (
        <div className="text-center p-4 bg-white rounded-sm shadow-md">
            <h1 className="text-2xl font-bold mb-2">About</h1>
            <p className="text-slate-700">
                This About page, Lorem ipsum dolor sit amet.
            </p>
            <Link to="/">
                <span className="p-0.5 bg-purple-600 hover:bg-purple-300 text-white font-bold rounded-sm">
                    Back Home
                </span>
            </Link>
        </div>
    )
}
