import { Link } from 'react-router-dom'
import { products } from '../mock-data/products'

export default function Products() {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-8">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-sm shadow-sm">
                <h1 className="text-3xl font-bold mb-6 text-black">Products</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border border-gray-300 rounded-sm p-6 flex flex-col"
                        >
                            <h2 className="text-xl font-bold mb-3">
                                {product.name}
                            </h2>
                            <p className="text-gray-600 mb-4 grow">
                                {product.description}
                            </p>
                            <p className="text-lime-600 font-bold text-xl mb-6">
                                ${product.price.toFixed(2)}
                            </p>

                            <div className="flex gap-4 mt-auto">
                                <Link
                                    to={`/products/${product.id}`}
                                    className="flex-1 bg-lime-400 text-white text-center py-2 rounded-sm hover:bg-lime-300 transition"
                                >
                                    View
                                    <br />
                                    Details
                                </Link>
                                <button
                                    className="flex-1 border border-lime-600 text-lime-500 py-2 rounded-sm hover:bg-lime-50 transition"
                                    onClick={() =>
                                        alert(`Added ${product.name} to cart!`)
                                    }
                                >
                                    Add to
                                    <br />
                                    Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
