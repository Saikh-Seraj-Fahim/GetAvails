export default function HowItWorksForm() {
    return (
        <div className="w-full lg:w-1/2 mt-9 p-8 shadow-2xl z-30">
            <form>
                <h1 className="font-semibold font-inter text-[#235789] text-3xl">My role is:</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <button className="px-4 py-1 text-[#235789] font-normal border border-[#235789] rounded-4xl
                        cursor-pointer font-inter focus:bg-[#235789] focus:text-white">
                        Artist
                    </button>
                    <button className="px-4 py-1 text-[#235789] font-normal border border-[#235789] rounded-4xl
                        cursor-pointer font-inter focus:bg-[#235789] focus:text-white">
                        Agent
                    </button>
                    <button className="px-4 py-1 text-[#235789] font-normal border border-[#235789] rounded-4xl
                        cursor-pointer font-inter focus:bg-[#235789] focus:text-white">
                        Venue
                    </button>
                    <button className="px-4 py-1 text-[#235789] font-normal border border-[#235789] rounded-4xl
                        cursor-pointer font-inter focus:bg-[#235789] focus:text-white">
                        Buyer
                    </button>
                </div>

                <div className="mt-6">
                    <label htmlFor="name" className="block font-medium font-inter text-[#235789] mb-1">
                        Your name
                    </label>
                    <input id="name" type="text" placeholder="John Smith"
                        className="w-full px-2 py-2 font-inter text-black placeholder-gray-400 bg-transparent 
                        border-b-2 border-[#235789] focus:outline-none"
                    />
                </div>

                <div className="mt-6">
                    <label htmlFor="mail" className="block font-medium font-inter text-[#235789] mb-1">
                        Your email
                    </label>
                    <input id="mail" type="email" placeholder="john@gmail.com"
                        className="w-full px-2 py-2 font-inter text-black placeholder-gray-400 bg-transparent  
                        border-b-2 border-[#235789] focus:outline-none"
                    />
                </div>

                <div className="mt-6">
                    <label htmlFor="textarea" className="block font-medium font-inter text-[#235789] mb-2">
                        Your message
                    </label>
                    <textarea id="textarea" placeholder="Enter text"
                        className="w-full px-4 py-2 font-inter text-black placeholder-gray-400 bg-transparent  
                        border-2 border-[#235789] rounded-lg"
                    />
                </div>

                <button className="w-full mt-8 py-2 font-inter bg-[#235789] text-white rounded-4xl cursor-pointer">
                    Send message
                </button>
            </form>
        </div>
    );
}