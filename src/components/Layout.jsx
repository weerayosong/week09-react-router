import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="min-h-dvh bg-zinc-50 text-zinc-900 font-sans">
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 transition-all duration-300">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link
                        to="/"
                        className="text-2xl font-extrabold tracking-tighter "
                    >
                        yosong<span className="text-lime-400">.</span>
                    </Link>

                    <div className="flex gap-2 md:gap-8 text-xs md:text-md font-medium text-zinc-500">
                        <Link
                            to="/about"
                            className="hover:text-lime-400 transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            to="/products"
                            className="hover:text-lime-400 transition-colors"
                        >
                            Products
                        </Link>
                        <Link
                            to="/contact"
                            className="hover:text-lime-400 transition-colors"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/fetch1"
                            className="hover:text-lime-400 transition-colors"
                        >
                            Fetch1
                        </Link>
                        <Link
                            to="/fetch2"
                            className="hover:text-lime-400 transition-colors"
                        >
                            Fetch2
                        </Link>
                    </div>

                    <div className="relative cursor-pointer flex items-center p-2 hover:bg-zinc-100 rounded-full transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-zinc-700"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                            />
                        </svg>

                        <span className="absolute top-0 right-0 bg-lime-400 text-lime-950 text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                            3
                        </span>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto py-10 px-6">
                <Outlet />
            </main>
        </div>
    )
}
