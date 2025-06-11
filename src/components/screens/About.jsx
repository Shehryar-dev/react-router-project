import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-10">
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-4xl sm:text-5xl font-bold text-indigo-800 mb-6 leading-tight">
                        Crafted with Passion & Purpose
                    </h2>
                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                        Our React-based application is developed by a dedicated team of software engineers who believe in performance, scalability, and modern UI/UX. Every component is built with care to ensure a smooth and responsive user experience.
                    </p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        We follow industry best practices, clean code principles, and utilize state-of-the-art tools to deliver robust solutions for modern web applications. This project represents the perfect blend of creativity and technical excellence.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/team"
                            className="bg-indigo-700 text-white px-6 py-3 rounded-md hover:bg-indigo-800 transition"
                        >
                            Meet Our Family
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-gray-300 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-400 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="/b4.png"
                        alt="About Illustration"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}


