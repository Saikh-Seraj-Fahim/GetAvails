import Image from "next/image";

export default function Insights() {
    return (
        <div className="flex flex-col lg:flex-row gap-6 w-full h-auto lg:h-[580px] mt-8 xl:px-44">
            <div className="relative w-full lg:w-1/3 h-[400px] lg:h-full">
                <Image src="/home-page-images/insights-1.png" alt="insights-1" fill className="object-cover object-center" />
                <div className="w-full absolute inset-x-0 bottom-0 min-h-[40%] backdrop-blur-sm p-2 lg:p-8">
                    <h1 className="font-inter font-medium text-[#FFFFFF] text-xl">How Agents Can Streamline
                        Their Artist Booking Workflow</h1>
                    <p className="font-inter font-normal text-[#FFFFFFB2] mt-2">Learn how Getavails helps agents
                        manage multiple artists, track offers, and close more bookings with less back-and-forth.</p>
                    <button className="w-full border rounded-full font-inter font-normal 
                   text-[#FFFFFF] cursor-pointer py-1 mt-3">Read More</button>
                </div>
            </div>

            <div className="relative w-full lg:w-1/3 h-[400px] lg:h-full">
                <Image src="/home-page-images/insights-2.png" alt="insights-1" fill className="object-cover object-center" />
                <div className="w-full absolute inset-x-0 bottom-0 min-h-[40%] backdrop-blur-sm p-2 lg:p-8">
                    <h1 className="font-inter font-medium text-[#FFFFFF] text-xl">How Agents Can Streamline
                        Their Artist Booking Workflow</h1>
                    <p className="font-inter font-normal text-[#FFFFFFB2] mt-2">Learn how Getavails helps agents
                        manage multiple artists, track offers, and close more bookings with less back-and-forth.</p>
                    <button className="w-full border rounded-full font-inter font-normal 
                    text-[#FFFFFF] cursor-pointer py-1 mt-3">Read More</button>
                </div>
            </div>

            <div className="relative w-full lg:w-1/3 h-[400px] lg:h-full">
                <Image src="/home-page-images/insights-3.png" alt="insights-1" fill className="object-cover object-center" />
                <div className="w-full absolute inset-x-0 bottom-0 min-h-[40%] backdrop-blur-sm p-2 lg:p-8">
                    <h1 className="font-inter font-medium text-[#FFFFFF] text-xl">How Agents Can Streamline
                        Their Artist Booking Workflow</h1>
                    <p className="font-inter font-normal text-[#FFFFFFB2] mt-2">Learn how Getavails helps agents
                        manage multiple artists, track offers, and close more bookings with less back-and-forth.</p>
                    <button className="w-full border rounded-full font-inter font-normal 
                    text-[#FFFFFF] cursor-pointer py-1 mt-3">Read More</button>
                </div>
            </div>
        </div>
    );
}
