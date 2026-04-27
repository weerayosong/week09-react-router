import { Link } from 'react-router-dom'

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Message sent!')
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-sm shadow-sm">
                <h1 className="text-3xl font-bold mb-6 text-black">
                    Contact Us
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-gray-800 mb-2"
                        >
                            Message:
                        </label>
                        <input
                            type="text"
                            id="message"
                            name="message"
                            autoComplete="on"
                            className="w-full border border-gray-400 rounded-sm px-3 py-2 outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-lime-400 font-bold text-white px-5 py-2 rounded-sm hover:bg-lime-300 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
