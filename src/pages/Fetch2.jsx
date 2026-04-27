import { useState, useEffect } from 'react'

export default function Fetch2() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-8">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-sm shadow-sm">
                <div className="flex flex-col items-center mb-10 text-center">
                    <h1 className="text-3xl font-bold text-lime-800">
                        Fetch 2
                    </h1>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="w-12 h-12 border-4 border-lime-300 border-t-lime-600 rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white p-6 rounded-sm shadow-sm border-2 border-transparent hover:border-lime-400 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 bg-lime-100 text-lime-600 rounded-full flex items-center justify-center font-bold mb-4 group-hover:bg-lime-500 group-hover:text-white transition-colors">
                                    {post.id}
                                </div>
                                <h2 className="text-lg font-bold text-gray-800 mb-3 capitalize line-clamp-2">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 text-sm line-clamp-3">
                                    {post.body}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
