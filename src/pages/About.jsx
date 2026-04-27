import { Link } from 'react-router-dom'
export default function About() {
    return (
        <div className="text-center min-h-screen bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-sm shadow-sm">
                <h1 className="text-2xl font-bold mb-2">About</h1>
                <div className="flex flex-col justify-center items-center text-center">
                    <img
                        className="m-4 aspect-square object-cover object-center rounded-full w-[15%] border-2 shadow-md border-lime-400"
                        src="https://images.unsplash.com/photo-1737255477763-8fbaf847e448?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="About Us Profile"
                    />
                    <p className="text-slate-700 mb-2 text-center">
                        This is the About page. Lorem ipsum dolor sit amet.
                    </p>
                    <Link to="/">
                        <span className="p-1 px-3 bg-lime-400 hover:bg-lime-300 text-white font-bold rounded-sm inline-block">
                            Back Home
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
