import { useState, useEffect } from 'react'

export default function Fetch1() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <h1 className="text-4xl font-extrabold text-lime-700 mb-2">
                        Fetch Users (Fetch 1)
                    </h1>
                </div>

                {isLoading ? (
                    <div className="text-center text-lime-600 text-xl font-semibold animate-pulse">
                        Fetchin...
                    </div>
                ) : (
                    <div className="bg-white rounded-xl overflow-hidden border border-lime-200">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-lime-500 text-white">
                                    <th className="p-4 font-semibold">ID</th>
                                    <th className="p-4 font-semibold">Name</th>
                                    <th className="p-4 font-semibold">Email</th>
                                    <th className="p-4 font-semibold">
                                        Company
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr
                                        key={user.id}
                                        className={`border-b border-lime-100 hover:bg-lime-100 transition-colors ${index % 2 === 0 ? 'bg-lime-50/50' : 'bg-white'}`}
                                    >
                                        <td className="p-4 text-lime-700 font-medium">
                                            {user.id}
                                        </td>
                                        <td className="p-4 font-semibold text-gray-800">
                                            {user.name}
                                        </td>
                                        <td className="p-4 text-gray-600">
                                            {user.email}
                                        </td>
                                        <td className="p-4 text-gray-500 text-sm">
                                            {user.company.name}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
