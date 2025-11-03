import EverythingYouNeed from "@/myComponents/Features/EverythingYouNeed";
import FeaturesHero from "@/myComponents/Features/FeaturesHero";
import { FaUserCog } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FaArrowRightLong, FaPlane } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";

export default function Features() {
    return (
        <div className="px-6 sm:px-12 md:px-16 xl:px-28">
            <FeaturesHero />

            <div className="mt-16">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#235789] text-center">Everything You Need to Book,
                    Manage, and Grow</h1>
                <p className="font-inter text-[#6B7280] text-center mt-2">A clear path to connect with artists, agents, and
                    venues — all in just a few clicks.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <EverythingYouNeed iconName={FaUserCog} color="#235789" description="Build a tailored profile experience 
                    for your role. Whether managing artists, listing venues, or booking talent, Getavails makes it seamless to create 
                    and maintain detailed profiles."/>
                    <EverythingYouNeed iconName={IoSearch} color="#235789" description="Find the perfect match with advanced search 
                    tools. Instantly explore artists and venues using smart filters, availability insights, and data-driven 
                    recommendations tailored to your needs."/>
                    <EverythingYouNeed iconName={BsMoonStarsFill} color="#235789" description="Plan smarter with AI-powered suggestions. 
                    Get automated recommendations for artist bookings, venue pairings, tour routing, and more, driven by real-time 
                    industry data and trends."/>
                    <EverythingYouNeed iconName={FaHandshake} color="#235789" description="Streamline your booking process by managing 
                    offers, tracking status, and confirming deals - all within a unified platform built to optimize efficiency and 
                    transparency."/>
                    <EverythingYouNeed iconName={FaPlane} color="#235789" description="Simplify event logistics with integrated 
                    travel and hotel planning. Manage itineraries, book accommodations, and coordinate travel details directly through 
                    your Getavails dashboard."/>
                    <EverythingYouNeed iconName={FaMessage} color="#235789" description="Enhance collaboration with built-in messaging 
                    and AI chat support. Communicate seamlessly with agents, venues, and artists to keep deals moving and events on 
                    track."/>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-16 pt-12 pb-12 bg-black">
                <h1 className="font-semibold font-IBM-plex-sans text-3xl text-[#FFFFFF] text-center">Book Smarter. Tour Faster.
                    Getavails is Here.</h1>
                <div className="flex flex-col md:flex-row gap-4 mt-12">
                    <button className="p-2 rounded-full text-black bg-white dark:text-gray-300 
                                dark:hover:bg-gray-800 transition-colors flex gap-2 cursor-pointer">
                        Get Started – It’s Free
                        <FaArrowRightLong className="translate-y-1/3" />
                    </button>
                    <button className="p-2 rounded-full text-black bg-white dark:text-gray-300 
                                dark:hover:bg-gray-800 transition-colors cursor-pointer">
                        Learn how it works
                    </button>
                </div>
            </div>
        </div>
    );
}