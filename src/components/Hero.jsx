import MeImage from "../assets/me.JPG";

function Hero({ title, description, buttonText }) {
    return (
        <section className="my-16 flex flex-col md:flex-row items-center md:justify-between gap-8
                            bg-gray-900 text-white p-8 rounded-xl shadow-xl">

            {/* Left column: text */}
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <p className="text-lg md:text-xl mb-6 text-gray-300">{description}</p>
                <button className="bg-yellow-500 text-gray-900 py-3 px-8 rounded-lg hover:bg-yellow-400 transition font-medium">
                    {buttonText}
                </button>
            </div>

            {/* Right column: circular picture */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
                <img
                    src={MeImage}
                    alt="Siyamthanda"
                    className="rounded-full shadow-2xl w-64 md:w-80 object-cover border-4 border-gray-700"
                />
            </div>
        </section>
    );
}

export default Hero;