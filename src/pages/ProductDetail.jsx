import { products } from '../mock-data/products'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function ProductDetail() {
    // 1. ดึง productId ออกมาจาก URL
    const { productId } = useParams()
    // 2. ค้นหาสินค้า
    const product = products.find((p) => p.id === productId)
    // 3. ดักจับ Error: ถ้าไม่พบสินค้า ให้แสดงข้อความ
    if (!product) {
        return (
            <div className="p-6 text-center text-red-500">
                <h1 className="text-2xl font-bold">404 - Not found</h1>
                <p>O_o</p>
            </div>
        )
    }
    // 4. แสดง
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-sm shadow-sm">
                <div className="mb-4">
                    <Link to="/Products">
                        <span className="p-1 bg-lime-400 hover:bg-lime-300 text-white font-bold rounded-sm">
                            Back to Products
                        </span>
                    </Link>
                </div>
                <div className="p-6 bg-white rounded-sm shadow-md max-w-lg">
                    <h1 className="text-3xl text-slate-600 font-bold mb-3">
                        {product.name}
                    </h1>
                    <p className="text-lime-400 mb-4">{product.description}</p>
                    <p className="text-lime-300 font-bold text-2xl mb-6">
                        ${product.price.toFixed(2)}
                    </p>
                    <p className="text-gray-400 text-sm mt-4">
                        Product ID: {product.id}
                    </p>
                </div>
            </div>
        </div>
    )
}
