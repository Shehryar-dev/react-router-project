import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl font-sans">
            <aside className="relative overflow-hidden text-white bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 rounded-lg sm:mx-16 mx-2 sm:py-24 py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-10 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl space-y-6 text-center sm:text-left sm:ml-auto">
                        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                            Convert Currencies Instantly
                            <span className="block text-lg sm:text-xl text-gray-300 mt-2">
                                Stay updated with real-time exchange rates
                            </span>
                        </h2>

                        <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                            Our app provides the fastest and most reliable currency conversion between 150+ world currencies. Whether you're traveling, trading, or shopping internationally — stay ahead with live market rates.
                        </p>

                        <Link
                            className="inline-flex items-center text-white px-6 py-3 font-semibold bg-orange-600 rounded-lg hover:opacity-80 transition duration-300"
                            to="/download"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download Now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 flex justify-start items-center pl-10 sm:pl-20">
                    <img className="w-72 sm:w-96 drop-shadow-xl opacity-90" src="/b8.png" alt="App Screenshot" />
                </div>
            </aside>

            <div className="grid place-items-center sm:mt-20 mt-10">
                <img className="sm:w-96 w-48 rounded-lg shadow-lg" src="/b5.png" alt="Mockup Image" />
            </div>

            <section className="text-center py-12 px-6 sm:px-20">
                <h1 className="text-3xl sm:text-5xl font-bold text-indigo-800 mb-6">Smart, Secure & Fast Currency Converter</h1>
                <p className="text-gray-700 text-lg sm:text-xl max-w-4xl mx-auto">
                    Built with React.js and Tailwind CSS, this converter offers a seamless experience, responsive design, and instant results. Supports over 150+ world currencies. Live rates are powered by reliable APIs. Download and enjoy the smoothest way to calculate money conversions.
                </p>
                <div className="mt-8 space-x-4">
                    <Link
                        to="/features"
                        className="inline-block bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition"
                    >
                        Explore Features
                    </Link>
                    <Link
                        to="/contact"
                        className="inline-block bg-gray-300 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-400 transition"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}
